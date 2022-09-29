<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { MenuInstance } from '@littlekie/components/menu'
import { Menu } from '@littlekie/components/menu'
import { mebuData } from '@littlekie/components/menu/__test__/mock'
import '@littlekie/components/menu/style/index.scss'
import type MenuItemNode from '@littlekie/components/menu/src/menu-item-node'
const reference = ref<MenuInstance>()
const actions: any = {
  ArrowDown: 'DOWN',
  ArrowUp: 'UP',
  ArrowLeft: 'LEFT',
  ArrowRight: 'RIGHT',
  Enter: 'ENTER',
  Backspace: 'BACK',
  Escape: 'BACK'
}
const meuRef = ref<HTMLElement>()

const keyUpFn = event => {
  reference.value?.KEYDOWN(actions[event.key])
}
onMounted(() => {
  window.document.addEventListener('keyup', keyUpFn)
  meuRef.value?.focus()
})
onUnmounted(() => {
  window.document.removeEventListener('keyup', keyUpFn)
  meuRef.value?.blur()
})
const isShow = ref(false)
const focusItem = ref<MenuItemNode>()
function changeFocusItem(item: MenuItemNode) {
  focusItem.value = item
}
</script>

<template>
  <div id="menu_contain" ref="meuRef" class="menu_contain">
    <Menu
      v-if="isShow"
      ref="reference"
      :data="mebuData"
      :visible="isShow"
      @close-menu="isShow = false"
      @change-focus-item="changeFocusItem"
    >
      <template #header>
        <div style="font-size: 0.3rem; color: red">i am menu title</div>
      </template>
    </Menu>
  </div>
  <div>当前选中的菜单是：{{ focusItem?.cssName }}</div>
  <button style="background: #a3fe65" @click="isShow = !isShow">
    toggle menu
  </button>
</template>

<style>
@import '@littlekie/components/menu/style/index.scss';
@import '../../../src/assets/eng.css';
.menu_contain {
  position: relative;
}
.option-wrapper {
  position: relative;
}
</style>
<style>
html {
  font-size: 40px;
}
</style>
