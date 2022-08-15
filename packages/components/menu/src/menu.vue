<template>
  <div v-show="visible" class="option-wrapper menu" role="menu">
    <SubMenu
      v-for="(menu, index) in menuList"
      :id="index"
      :key="index"
      :ref="subMenuRefList.set"
      :currentFocusItemIndex="currentItemIndex"
      :currentFocusMenuIndex="currentMenuIndex"
      :cssHeaderTitle="cssHeaderTitle"
      :headerTitle="headerTitle"
      :sub-menu-data="menu"
      @openNextMenu="openNextMenu"
      @collapseSubMenu="collapseSubMenu"
      @berforeClose="berforeClose"
      @clickItemHandler="clickItemHandler"
      @changeCurrentFocusItemIndex="changeCurrentFocusItemIndex"
    >
      <template v-if="$slots.header" #header>
        <slot name="header" />
      </template>
    </SubMenu>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRefsList } from '@mini-element-plus/hooks'
import { computed, ref, unref } from 'vue'
import { SubMenuInstance } from '..'
import MenuItemNode, { IMenuItemData } from './menu-item-node'
import SubMenu from './sub-menu.vue'
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
  menuList.value.push(menuItem.children)
  let newCurrentItemIndex = 0
  newCurrentItemIndex = menuItem.children.findIndex(item => item.isChecked)
  currentItemIndex.value = newCurrentItemIndex > -1 ? newCurrentItemIndex : 0
  currentMenuIndex.value = menuItem.level
}
function collapseSubMenu (menuItem: MenuItemNode) {
  currentMenuIndex.value -= 1
  currentItemIndex.value = menuItem.parent!.value
  menuList.value = menuList.value.slice(0, menuItem.level - 1)
}
function berforeClose () {
  // TODO berforeClose
  console.log('berforeClose')
  emit('closeMenu')
}
const emit = defineEmits<{
  (e: 'onEnter', menuItem: MenuItemNode): void
  (e: 'closeMenu'): void
}>()
function clickItemHandler (menuItem: MenuItemNode) {
  currentItemIndex.value = menuItem.value
  emit('onEnter', menuItem)
}

function changeCurrentFocusItemIndex (index: number) {
  currentItemIndex.value = index
}
function updateMenuList () {
  menuList.value = [props.data.map(item => new MenuItemNode(item))]
}
function KEYDOWN (name: string) {
  subMenuRefList.value[currentMenuIndex.value].KEYDOWN(name)
}
function initData () {
  updateMenuList()
  if (menuList.value[0]) {
    currentItemIndex.value = menuList.value[0].findIndex(item => item.isChecked)
  }
  currentItemIndex.value =
    currentItemIndex.value > -1 ? currentItemIndex.value : 0
}
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

<style scoped></style>
