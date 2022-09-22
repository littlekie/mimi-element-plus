<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import macrosDemo from './components/macros-demo.vue'
import TsxDemo from './components/demo'
import { MenuItemProgress } from '@littlekie/components/menu'
import { ref } from 'vue';
const value = ref(0)
const reference = ref()
window.reference = reference
window.setvalue = ()=> value.value+=1
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <macrosDemo :msg='value+""'/>
  <MenuItemProgress ref="reference" :min-size="0" :max-size="10" v-model="value"></MenuItemProgress>
  <TsxDemo/>
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
