<template>
  <div :id="'sidebar_' + id" class="wh-sidebar" role="subMenu">
    <div class="wh-sc-header">
      <slot name="header" v-if="id === 0">
        <template v-if="!isUndefined(cssHeaderTitle || headerTitle)">
          <div class="wh-sc-header-title">
            <span class="wh-st-text" :class="cssHeaderTitle"
              >{{ headerTitle }}}</span
            >
          </div>
          <div class="underline"></div>
        </template>
      </slot>
    </div>
    <div class="arrow-up iconfont">
      <span class="arrow" :class="{'icon-switch_down2':upArrowShow}">  </span>
    </div>
    <div class="wh-sc-content">
      <div class="wh-sc-content-list">
        <template v-for="(item, index) in subMenuData">
          <MenuItemProgress
            v-if="item.nodeType === NodeType.IS_BAR"
            :isFocus="activeMenu && currentFocusItemIndex === index"
            :ref="menuItemProgressRef.set"
            :key="index + item.nodeType"
            :max-size="item.progressMaxSize"
            :min-size="item.progressMinSize"
            v-model="item.progressValue"
            @on-change="changeProgress(item)"
          />
          <menu-item
            v-else
            :id="index"
            :node="item"
            :isFocus="activeMenu && currentFocusItemIndex === index"
            :isActive="!activeMenu && menuItemActiveIndex === index"
            :key="index + item.name"
            @click.stop="clickItemHandler(item, index)"
          >
          </menu-item>
        </template>
      </div>
    </div>
    <div class="arrow-down iconfont">
      <span class="arrow" :class="{'icon-switch_down2':downArrowShow}">  </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import MenuItemNode, { NodeType } from './menu-item-node'
import MenuItem from './menu-item.vue'
import MenuItemProgress from './menu-item-progress.vue'
import { MenuItemProgressInstance } from '..'
import { useTemplateRefsList } from '@mini-element-plus/hooks'
import { isUndefined } from '@mini-element-plus/utils'

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
const upArrowShow = ref(false)
const downArrowShow = ref(false)
const activeMenu = computed(() => props.currentFocusMenuIndex === props.id)
if (activeMenu.value) {
  setCurrentFocusItemIndex(props.currentFocusItemIndex)
}
const menuItemActiveItem = computed(
  () => props.subMenuData[menuItemActiveIndex.value]
)
const menuItemProgressRef = useTemplateRefsList<MenuItemProgressInstance>()
watch(
  () => props.currentFocusItemIndex,
  newValue => {
    if (activeMenu.value) {
      setCurrentFocusItemIndex(newValue)
    }
  }
)
watch(
  () => props.subMenuData,
  newValue => {
    if (newValue?.length && activeMenu.value) {
      const selectedIndex = newValue.findIndex(item => item.isChecked)
      menuItemActiveIndex.value = selectedIndex > -1 ? selectedIndex : 0
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

function clickItemHandler (menuItem: MenuItemNode, index: number) {
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
     emit('collapseSubMenu',menuItem)
  }
  setCurrentFocusItemIndex(index)
  emit('clickItemHandler', menuItem)
}

function KEYDOWN (action: string) {
  Action[action]?.()
}
function ENTER () {
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
  const {subMenuData} = props
  let nextIndex = menuItemActiveIndex.value
  for (let index = subMenuData.length - 1; index >= 0; index--) {
    if (
      !subMenuData[index].isDisabled &&
      index < menuItemActiveIndex.value
    ) {
      nextIndex = index
      return nextIndex
    }
  }
  return nextIndex
}
function searchNextNodeNoDisabledIndex() {
  const {subMenuData} = props
  let nextIndex = menuItemActiveIndex.value
  for (let index = 0; index < subMenuData.length; index++) {
    if (
      !subMenuData[index].isDisabled &&
      index > menuItemActiveIndex.value
    ) {
      nextIndex = index
      return nextIndex
    }
  }
  return nextIndex
}
function UP () {
  if (menuItemActiveIndex.value === 0) {
    setCurrentFocusItemIndex(props.subMenuData.length - 1)
  } else {
    setCurrentFocusItemIndex(searchLastNodeNoDisabledIndex())
  }
}
function DOWN () {
  if (menuItemActiveIndex.value === props.subMenuData.length - 1) {
    setCurrentFocusItemIndex(0)
  } else {
    setCurrentFocusItemIndex(searchNextNodeNoDisabledIndex())
  }
}
function RIGHT () {
  menuItemProgressRef.value[0]?.RIGHT()
}
function LEFT () {
  menuItemProgressRef.value[0]?.LEFT()
}
function BACK () {
  if (menuItemActiveItem.value.parent) {
    emit('collapseSubMenu', menuItemActiveItem.value)
  } else {
    emit('berforeClose')
  }
}
function selectRaido (menuItem: MenuItemNode) {
  if (menuItem.nodeType === NodeType.IS_RADIO && !menuItem.isChecked) {
    props.subMenuData[lastMenuItemActiveIndex.value].isChecked = false // TODO 后续是否要移到父级处理数据?
    menuItem.isChecked = true
  }
}
function changeProgress (menuItem: MenuItemNode) {
  emit('volumeBarAdjust', menuItem)
}
function setCurrentFocusItemIndex (index: number) {
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
