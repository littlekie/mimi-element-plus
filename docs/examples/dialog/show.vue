<template>
  <div class="resetButton" @click="dialogModalShow = true">
    show dialog modal
  </div>
  <dialog-modal
    ref="dialogModalRef"
    v-model="dialogModalShow"
    title="Tips"
    width="50%"
    :before-close="handleClose"
    :has-cancel="true"
    :has-confirm="true"
    :cancel-text="'Cancel'"
    :confirm-text="'Ok'"
    @cancel="handleModalCancel"
    @confirm="handleModalConfirm"
  >
    <template #header>header tip text</template>
    <span>This is a message</span>
  </dialog-modal>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { dialogModal } from '@littlekie/components/dialogModal'
const dialogModalShow = ref(false)
const dialogModalRef = ref()
const handleClose = (done: () => void) => {
  alert('dialog close')
  done()
}
const handleModalCancel = () => {
  alert('dialog cancel')
  dialogModalShow.value = false
}
const handleModalConfirm = () => {
  alert('dialog confirm')
  dialogModalShow.value = false
}
onMounted(() => {
  document.onkeydown = handleKeydown
})
onUnmounted(() => {
  document.onkeydown = null
})
const handleKeydown = (e: Event) => {
  console.log(e)
  if (e.key === 'ArrowRight') {
    e.action = 'Right'
  } else if (e.key === 'ArrowLeft') {
    e.action = 'Left'
  } else if (e.key === 'Enter') {
    e.action = 'Enter'
  } else if (e.key === 'Backspace') {
    e.action = 'Back'
  }
  dialogModalRef.value.KEYDOWN(e)
}
</script>
<style lang="scss" scoped>
.resetButton {
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  background: green;
  color: aqua;
  border: 1px solid aqua;
  z-index: 1;
}
</style>
