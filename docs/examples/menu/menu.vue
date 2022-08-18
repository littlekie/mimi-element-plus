<script setup lang="ts">
import { Menu, MenuInstance } from '@mini-element-plus/components/menu'
import { ref, onBeforeUnmount,onMounted } from 'vue'
import { mebuData } from '@mini-element-plus/components/menu/__test__/mock'
import '@mini-element-plus/components/menu/style/index.scss'
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
onMounted(() => {
  window.document.addEventListener('keyup', event => {
    reference.value?.KEYDOWN(actions[event.key])
  })
})
</script>

<template>
	<div class="menu_contain" id="menu_contain">
		  <Menu :data="mebuData" ref="reference" :visible="true">
    <template #header>
      <div style="font-size:.3rem;color:red">
        i am menu title
      </div>
    </template>
  </Menu>
	</div>
</template>

<style>
@import '@mini-element-plus/components/menu/style/index.scss';
@import '../../../src/assets/eng.css';
.menu_contain{
	position: relative;
}
.option-wrapper {
    position: relative;;
}
</style>
<style >
html{
	font-size: 40px;
}
</style>
