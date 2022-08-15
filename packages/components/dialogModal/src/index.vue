<template>
  <overlay
    v-show="visible"
    :mask="modal"
    :overlay-class="modalClass"
  >
    <div
      role="dialog"
      aria-model="true"
      class="overlayDialog"
      :class="`${ns.namespace.value}-overlay-dialog`"
      @click="onModalClick"
    >
      <dialog-content
        :custom-class="customClass"
        :center="center"
        :show-close="showClose"
        :title="title"
        :cancel-text="cancelText"
        :confirm-text="confirmText"
        :default-focus="defaultFocus"
        :focus-control="focusControl"
        :has-cancel="hasCancel"
        :has-confirm="hasConfirm"
        @close="handleClose"
        @cancel="$emit('cancel')"
        @confirm="$emit('confirm')"
        ref="dialogContentRef"
      >
        <template #header>
          <slot v-if="!$slots.title" name="header" :close="handleClose"></slot>
          <slot v-else name="title"></slot>
        </template>
        <slot></slot>
        <template v-if="$slots.footer" #footer>
          <slot name="footer"></slot>
        </template>
      </dialog-content>
    </div>
  </overlay>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import overlay from './components/overlay.vue'
import dialogContent from './components/dialog-content.vue'
import { useDialog } from './useDialog'
import { dialogInjectionKey } from './tokens'
import { useNamespace } from '@mini-element-plus/hooks'

import { dialogProps } from './types/dialog-type'
const props = defineProps(dialogProps)
const { onModalClick, handleClose, style, visible } = useDialog(props)
const ns = useNamespace('dialogModal')
provide(dialogInjectionKey, {
  style,
  ns,
  visible
})
const dialogContentRef = ref()
defineExpose({
  dialogContentRef,
  visible
})
</script>
<style lang="scss" scoped>
.overlayDialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
</style>
