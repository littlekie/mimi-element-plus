<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, MenuInstance } from '@mini-element-plus/components/menu'
import { mebuData } from '@mini-element-plus/components/menu/__test__/mock'
import '@mini-element-plus/components/menu/style/index.scss'
import MenuItemNode from '@mini-element-plus/components/menu/src/menu-item-node'
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
function changeFocusItem (item: MenuItemNode) {
  focusItem.value = item
}
</script>

<template>
  <div class="menu_contain" id="menu_contain" ref="meuRef">
    <Menu
      :data="mebuData"
      @closeMenu="isShow = false"
      @changeFocusItem="changeFocusItem"
      ref="reference"
      v-if="isShow"
      :visible="isShow"
    >
      <template #header>
        <div style="font-size:.3rem;color:red">
          i am menu title
        </div>
      </template>
    </Menu>
  </div>
  <div>当前选中的菜单是：{{ focusItem?.cssName }}</div>
  <button style="background:#A3FE65" @click="isShow = !isShow">
    toggle menu
  </button>
</template>

<style>
@import '@mini-element-plus/components/menu/style/index.scss';
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
