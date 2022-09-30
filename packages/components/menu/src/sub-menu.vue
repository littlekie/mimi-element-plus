<template>
  <div :id="'sidebar_' + id" class="wh-sidebar" role="subMenu">
    <div class="wh-sc-header">
      <slot v-if="id === 0" name="header">
        <template v-if="!isUndefined(cssHeaderTitle || headerTitle)">
          <div class="wh-sc-header-title">
            <span class="wh-st-text" :class="cssHeaderTitle">{{
              headerTitle
            }}</span>
          </div>
          <div class="underline" />
        </template>
      </slot>
    </div>
    <div class="arrow-up iconfont">
      <span class="arrow" :class="{ 'icon-switch_down2': upArrowShow }" />
    </div>
    <div class="wh-sc-content">
      <div
        class="wh-sc-content-list"
        :style="{ transform: `translateY(-${offsetAxisY * 0.7}rem` }"
      >
        <template v-for="(item, index) in subMenuData">
          <MenuItemProgress
            v-if="item.nodeType === NodeType.IS_BAR"
            :ref="menuItemProgressRef.set"
            :key="index + item.nodeType"
            v-model="item.progressValue"
            :is-focus="activeMenu && currentFocusItemIndex === index"
            :max-size="item.progressMaxSize"
            :min-size="item.progressMinSize"
            @on-change="changeProgress(item)"
          />
          <menu-item
            v-else
            :id="index"
            :key="index + item.name"
            :node="item"
            :is-focus="activeMenu && currentFocusItemIndex === index"
            :is-active="!activeMenu && menuItemActiveIndex === index"
            @click.stop="clickItemHandler(item, index)"
          />
        </template>
      </div>
    </div>
    <div class="arrow-down iconfont">
      <span class="arrow" :class="{ 'icon-switch_down2': downArrowShow }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue'
import type MenuItemNode from './menu-item-node'
import { NodeType } from './menu-item-node'
import MenuItem from './menu-item.vue'
import MenuItemProgress from './menu-item-progress.vue'
import type { MenuItemProgressInstance } from '..'
import { useTemplateRefsList } from '@littlekie/hooks'
import { isUndefined } from '@littlekie/utils'
import { useSubMenArrow } from './sub-menu-hooks'

interface ISubMenuProps {
  id: number
  subMenuData: MenuItemNode[]
  currentFocusMenuIndex?: number
  currentFocusItemIndex?: number
  cssHeaderTitle?: string
  headerTitle?: string
}
const props = withDefaults(defineProps<ISubMenuProps>(), {
  id: 0,
  currentFocusMenuIndex: 0,
  currentFocusItemIndex: 0
})
const menuItemActiveIndex = ref(0)
const lastMenuItemActiveIndex = ref(0)
const { subMenuData } = toRefs(props)
const {
  downArrowShow,
  upArrowShow,
  offsetAxisY,
  handlerDownArrow,
  handlerUpArrow
} = useSubMenArrow({
  id: props.id,
  menuItemActiveIndex,
  subMenuData
})
const activeMenu = computed(() => props.currentFocusMenuIndex === props.id)
if (activeMenu.value) {
  setCurrentFocusItemIndex(props.currentFocusItemIndex)
}
const menuItemActiveItem = computed(
  () => props.subMenuData[menuItemActiveIndex.value]
)
const menuItemProgressRef = useTemplateRefsList<MenuItemProgressInstance>()
watch(
  () => props.subMenuData,
  newValue => {
    if (newValue?.length && activeMenu.value) {
      const selectedIndex = newValue.findIndex(item => item.isChecked)
      setCurrentFocusItemIndex(selectedIndex > -1 ? selectedIndex : 0)
    }
  },
  {
    deep: true,
    immediate: true
  }
)

const emit = defineEmits<{
  (e: 'clickItemHandler', menuItem: MenuItemNode): void
  (e: 'collapseSubMenu', menuItem: MenuItemNode): void
  (e: 'berforeClose'): void
  (e: 'volumeBarAdjust', menuItem: MenuItemNode): void
  (e: 'openNextMenu', menuItem: MenuItemNode): void
  (e: 'update:currentFocusItemIndex', index: number): void
  (e: 'changeFocusItem', menuItem: MenuItemNode): void
}>()

function clickItemHandler(menuItem: MenuItemNode, index: number) {
  if (menuItem.isDisabled) {
    return
  }
  if (!menuItem.isLeaf) {
    setCurrentFocusItemIndex(index)
    return emit('openNextMenu', menuItem)
  }
  if (menuItem.nodeType === NodeType.IS_RADIO && !menuItem.isChecked) {
    props.subMenuData[menuItemActiveIndex.value].isChecked = false // TODO 后续是否要移到父级处理数据?
    menuItem.isChecked = true
  }
  if (!menuItem.parent && menuItem.isLeaf) {
    emit('collapseSubMenu', menuItem)
  }
  setCurrentFocusItemIndex(index)
  emit('clickItemHandler', menuItem)
}

function KEYDOWN(action: string) {
  Action[action]?.()
}
function ENTER() {
  const menuItem = props.subMenuData[menuItemActiveIndex.value]
  if (menuItem.nodeType === NodeType.IS_RADIO && !menuItem.isChecked) {
    selectRaido(menuItem)
    emit('clickItemHandler', menuItem)
  } else if (menuItem.isLeaf) {
    emit('clickItemHandler', menuItem)
  } else {
    emit('openNextMenu', menuItem)
  }
}
function searchLastNodeNoDisabledIndex() {
  const { subMenuData } = props
  let nextIndex = menuItemActiveIndex.value
  for (let index = subMenuData.length - 1; index >= 0; index--) {
    if (!subMenuData[index].isDisabled && index < menuItemActiveIndex.value) {
      nextIndex = index
      return nextIndex
    }
  }
  return nextIndex
}
function searchNextNodeNoDisabledIndex() {
  const { subMenuData } = props
  let nextIndex = menuItemActiveIndex.value
  for (let index = 0; index < subMenuData.length; index++) {
    if (!subMenuData[index].isDisabled && index > menuItemActiveIndex.value) {
      nextIndex = index
      return nextIndex
    }
  }
  return nextIndex
}
function UP() {
  if (menuItemActiveIndex.value === 0) {
    setCurrentFocusItemIndex(props.subMenuData.length - 1)
  } else {
    setCurrentFocusItemIndex(searchLastNodeNoDisabledIndex())
  }
  handlerUpArrow()
}
function DOWN() {
  if (menuItemActiveIndex.value === props.subMenuData.length - 1) {
    setCurrentFocusItemIndex(0)
  } else {
    setCurrentFocusItemIndex(searchNextNodeNoDisabledIndex())
  }
  handlerDownArrow()
}
function RIGHT() {
  menuItemProgressRef.value[0]?.RIGHT()
}
function LEFT() {
  menuItemProgressRef.value[0]?.LEFT()
}
function BACK() {
  if (menuItemActiveItem.value.parent) {
    emit('collapseSubMenu', menuItemActiveItem.value)
  } else {
    emit('berforeClose')
  }
}
function selectRaido(menuItem: MenuItemNode) {
  if (menuItem.nodeType === NodeType.IS_RADIO && !menuItem.isChecked) {
    props.subMenuData[lastMenuItemActiveIndex.value].isChecked = false // TODO 后续是否要移到父级处理数据?
    menuItem.isChecked = true
  }
}
function changeProgress(menuItem: MenuItemNode) {
  emit('volumeBarAdjust', menuItem)
}
function setCurrentFocusItemIndex(index: number) {
  lastMenuItemActiveIndex.value = menuItemActiveIndex.value
  menuItemActiveIndex.value = index
  emit('update:currentFocusItemIndex', index)
  emit('changeFocusItem', props.subMenuData[index])
}
const Action: Record<string, () => void> = {
  DOWN,
  UP,
  RIGHT,
  LEFT,
  ENTER,
  BACK
}
defineExpose({
  menuItemActiveIndex,
  activeMenu,
  KEYDOWN,
  lastMenuItemActiveIndex
})
</script>

<style scoped></style>
