<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { MenuItemProgress } from '@mini-element-plus/components/menu'
import { dialogModal } from '@mini-element-plus/components'
import { ComponentPublicInstance, onMounted, ref } from 'vue';
const value = ref(0)
const reference = ref()
window.reference = reference
window.setvalue = ()=> value.value+=1

const  dialogModalShow = ref(false)
const focuser = ref<ComponentPublicInstance | null>();
const appRef = ref();
const handleClose = (done: () => void) => {
  done()
}
const handleModalCancel = () => {
  console.log('handleModalCancel')
  dialogModalShow.value = false;
}
const handleModalConfirm = () => {
  console.log('handleModalConfirm')
  dialogModalShow.value = false;
}
const setDialogFocus = (vm: ComponentPublicInstance) => {
  console.log('setDialogFocus,', vm)
  focuser.value = vm;
}
const removeDialogFocus = () => {
  console.log('removeDialogFocus')
  focuser.value = null;
}
onMounted(() => {
  console.log('onmounted appref:', appRef.value)
  setTimeout(() => {
    appRef.value.focus();
  }, 2000)
})
const handleKeydown = (e: Event) => {
  console.log('focuser:', focuser.value)
}
</script>

<template>
  <div ref="appRef" @keydown.native="handleKeydown">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <MenuItemProgress ref="reference" :min-size="0" :max-size="10" v-model="value"></MenuItemProgress>
    <div @click="dialogModalShow = true" style="position: fixed; top: 100px; left: 100px; width: 50px; height: 50px; font-size: 18px; background: white;">reset</div>
    <dialog-modal
        v-model="dialogModalShow"
        title="Tips"
        width="50%"
        :before-close="handleClose"
        @cancel="handleModalCancel"
        @confirm="handleModalConfirm"
        :has-cancel="true"
        :has-confirm="true"
        :setDialogFocus="setDialogFocus"
        :removeDialogFocus="removeDialogFocus"
      >
        <template #header>header tip text</template>
        <span>This is a message</span>
    </dialog-modal>
  </div>

</template>

<style scoped>
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
