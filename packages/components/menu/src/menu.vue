<template>
  <div v-show="visible" class="option-wrapper menu" role="menu">
    <SubMenu
      v-for="(menu, index) in menuList"
      :id="index"
      :key="index"
      :ref="subMenuRefList.set"
      v-model:currentFocusItemIndex="currentItemIndex"
      v-model:currentFocusMenuIndex="currentMenuIndex"
      :cssHeaderTitle="cssHeaderTitle"
      :headerTitle="headerTitle"
      :sub-menu-data="menu"
      @openNextMenu="openNextMenu"
      @changeFocusItem="changeFocusItem"
      @collapseSubMenu="collapseSubMenu"
      @berforeClose="berforeClose"
      @clickItemHandler="clickItemHandler"
    >
      <template v-if="$slots.header" #header>
        <slot name="header"></slot>
      </template>
    </SubMenu>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTemplateRefsList } from '@mini-element-plus/hooks'
import { SubMenuInstance } from '..'
import MenuItemNode, { IMenuItemData } from './menu-item-node'
import SubMenu from './sub-menu.vue'
import { isUndefined } from '@mini-element-plus/utils'
const props = defineProps<{
  data: IMenuItemData[]
  cssHeaderTitle?: string
  headerTitle?: string
  visible?: boolean
}>()
const menuList = ref<Array<MenuItemNode[]>>([])
const subMenuRefList = useTemplateRefsList<SubMenuInstance>()
const currentMenuIndex = ref(0),
  currentItemIndex = ref(0)
const currentMenuItemData = computed(() => {
  return menuList.value[currentMenuIndex.value][currentItemIndex.value]
})
const activeMenuItemRecord = computed(() => {
  return getActiveData(currentMenuItemData.value)
})
let activeMenuItemData = ref<Record<number, number>>({})
function getActiveData (menuItem: MenuItemNode) {
  activeMenuItemData.value = {}
  getParentData(menuItem)
  return activeMenuItemData.value
}
function getParentData (menuItem: MenuItemNode) {
  if (menuItem.parent) {
    activeMenuItemData.value[menuItem.parent.level - 1] = menuItem.parent.value
    getParentData(menuItem.parent)
  }
}
function openNextMenu (menuItem: MenuItemNode) {
  menuList.value = menuList.value.slice(0, menuItem.level)
  menuList.value.push(menuItem.children)
  let newCurrentItemIndex = 0
  newCurrentItemIndex = menuItem.children.findIndex(item => item.isChecked)
  currentItemIndex.value = newCurrentItemIndex > -1 ? newCurrentItemIndex : 0
  currentMenuIndex.value = menuItem.level
}
function collapseSubMenu (menuItem: MenuItemNode) {
  if (menuItem.parent) {
    currentMenuIndex.value -= 1
    currentItemIndex.value = menuItem.parent.value
    menuList.value = menuList.value.slice(0, menuItem.level - 1)
  } else {
    menuList.value = menuList.value.slice(0, 1)
    currentMenuIndex.value = 0
    currentItemIndex.value = menuItem.value
  }
}
function berforeClose () {
  // TODO berforeClose
  console.log('berforeClose')
  emit('closeMenu')
}
function changeFocusItem (menuItem: MenuItemNode) {
  emit('changeFocusItem', menuItem)
}
const emit = defineEmits<{
  (e: 'changeFocusItem', menuItem: MenuItemNode): void
  (e: 'onEnter', menuItem: MenuItemNode): void
  (e: 'closeMenu'): void
}>()
function clickItemHandler (menuItem: MenuItemNode) {
  emit('onEnter', menuItem)
}

function initMenuList () {
  menuList.value = [props.data.map(item => new MenuItemNode(item))]
}
function KEYDOWN (name: string) {
  subMenuRefList.value[currentMenuIndex.value].KEYDOWN(name)
}
function initData () {
  initMenuList()
  if (menuList.value[0]) {
    currentItemIndex.value = menuList.value[0].findIndex(item => item.isChecked)
  }
  currentItemIndex.value =
    currentItemIndex.value > -1 ? currentItemIndex.value : 0
}
function updateMenuList () {
  const newMenu = [props.data.map(item => new MenuItemNode(item))]
  const oldActiveMenuItemRecord = activeMenuItemRecord.value
  activeMenuItemRecord.value[0]
  menuList.value.forEach((item, menuId) => {
    const oldMenuItemId = oldActiveMenuItemRecord[menuId - 1]
    if (isUndefined(oldMenuItemId)) {
      menuList.value[0] = newMenu[0]
    } else {
      menuList.value[menuId] =
        menuList.value[menuId - 1][oldMenuItemId].children
    }
  })
}
watch(() => props.data, updateMenuList)

initData()
defineExpose({
  activeMenuItemRecord,
  activeMenuItemData,
  menuList,
  currentItemIndex,
  currentMenuIndex,
  currentMenuItemData,
  subMenuRefList,
  KEYDOWN
})
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
