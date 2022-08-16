<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Menu, MenuInstance } from '@mini-element-plus/components/menu'
import { ref } from 'vue'
import { mebuData } from '../packages/components/menu/__test__/mock';
mebuData
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
document.addEventListener('keyup', event => {
  reference.value?.KEYDOWN(actions[event.key])
})
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <Menu :data="mebuData" ref="reference" :visible="true">
    <template #header>
      <div style="font-size:.3rem;color:red">
        i am menu title
      </div>
    </template>
  </Menu>
</template>

<style>
@import './assets/eng.css';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
