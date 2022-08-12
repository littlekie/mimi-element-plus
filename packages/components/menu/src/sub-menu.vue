<template>
  <div :id="'sidebar_' + id" class="wh-sidebar" role="subMenu">
    <div class="wh-sc-header">
      <template v-if="Boolean(headerTitle) && id === 0">
        <div class="wh-sc-header-title">
          <span class="wh-st-text" :class="headerTitle"></span>
        </div>
        <div class="underline"></div>
      </template>
    </div>
    <div class="arrow-up iconfont">
      <span v-show="upArrowShow" class="arrow icon-switch_down2"> </span>
    </div>
    <div class="wh-sc-content">
      <div class="wh-sc-content-list">
        <template v-for="(item, index) in subMenuData">
          <MenuItemProgress
            v-if="item.nodeType === NodeType.IS_BAR"
            :ref="menuItemProgressRef.set"
            :key="index + item.nodeType"
            :max-size="item.progressMaxSize"
            :min-size="item.progressMinSize"
            @on-change="changeProgress(item)"
            v-model="item.progressValue"
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
      <span v-show="downArrowShow" class="arrow icon-switch_down2"></span>
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

interface ISubMenu {
  id: number
  currentFocusMenuIndex: number
  currentFocusItemIndex: number
  headerTitle?: string
  subMenuData: MenuItemNode[]
}
const props = withDefaults(defineProps<ISubMenu>(), {
  id: 0,
  currentFocusMenuIndex: 0,
  currentFocusItemIndex: 0
})
const menuItemActiveIndex = ref(0)
const lastMenuItemActiveIndex = ref(0)
const upArrowShow = ref(false)
const downArrowShow = ref(false)
const activeMenu = computed(() => props.currentFocusMenuIndex === props.id)
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
    if (newValue?.length) {
      const selectedIndex = newValue.findIndex(item => item.isChecked)
      menuItemActiveIndex.value = selectedIndex > -1 ? selectedIndex : 0
    }
  },
  {
    deep: true
  }
)

const emit = defineEmits<{
  (e: 'clickItemHandler', menuItem: MenuItemNode): void
  (e: 'volumeBarAdjust', menuItem: MenuItemNode): void
  (e: 'openNextMenu', menuItem: MenuItemNode[]): void
  (e: 'update:currentFocusItemIndex', index: number): void
}>()

function clickItemHandler (menuItem: MenuItemNode, index: number) {
  if (menuItem.isDisabled) {
    return
  }
  if (menuItem.nodeType === NodeType.IS_RADIO && !menuItem.isChecked) {
    props.subMenuData[menuItemActiveIndex.value].isChecked = false // TODO 后续是否要移到父级处理数据?
    menuItem.isChecked = true
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
    console.log('enteritem', menuItem)
    selectRaido(menuItem)
  } else if (menuItem.isLeaf) {
    emit('clickItemHandler', menuItem)
  } else {
    emit('openNextMenu', menuItem.children)
  }
}
function searchLastNodeNoDisabledIndex () {
  let nextIndex = menuItemActiveIndex.value
  for (let index = props.subMenuData.length - 1; index >=0; index--) {
    if (
      !props.subMenuData[index].isDisabled &&
      index < menuItemActiveIndex.value
    ) {
      nextIndex = index
      return nextIndex
    }
  }
  return nextIndex
}
function searchNextNodeNoDisabledIndex () {
  let nextIndex = menuItemActiveIndex.value
  for (let index = 0; index < props.subMenuData.length; index++) {
    if (
      !props.subMenuData[index].isDisabled &&
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
}
const Action: Record<string, () => void> = {
  DOWN,
  UP,
  RIGHT,
  LEFT,
  ENTER
}
defineExpose({
  menuItemActiveIndex,
  activeMenu,
  KEYDOWN,
  lastMenuItemActiveIndex
})
</script>

<style scoped></style>
