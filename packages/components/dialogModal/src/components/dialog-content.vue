<template>
  <div :class="[ns.b(), customClass]" :style="style" @click.stop>
    <header :class="ns.e('header')">
      <slot name="header">
        <div>{{ title }}</div>
      </slot>
      <span v-if="showClose" class="closeIcon" @click="$emit('close')"
        >&nbsp;&nbsp;x&nbsp;&nbsp;</span
      >
    </header>
    <div :class="ns.e('body')">
      <slot></slot>
    </div>
    <footer v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer"></slot>
    </footer>
    <footer v-else :class="[ns.e('footer'), ns.em('footer', 'default')]">
      <show-button
        v-if="hasCancel"
        :active="isCancelButton"
        @click="handleClickCancel"
      >
        {{ cancelText }}
      </show-button>
      <show-button
        v-if="hasConfirm"
        :active="isConfirmButton"
        @click="handleClickConfirm"
      >
        {{ confirmText }}
      </show-button>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import { ComponentInternalInstance, ComponentPublicInstance, computed, getCurrentInstance, inject, ref, watch } from 'vue'
import { showButton } from '@mini-element-plus/components'
import {
  dialogContentEmits,
  dialogContentProps
} from '../types/dialog-content-type'
import { dialogInjectionKey } from '../tokens'
import { BUTTON_TYPE } from '../useDialog'

const props = defineProps(dialogContentProps)
const emit = defineEmits(dialogContentEmits)
const { style, ns, visible } = inject(dialogInjectionKey)!

const activeButton = ref(BUTTON_TYPE.CANCEL)

const vm = getCurrentInstance()?.proxy;
if (props.focusControl) {
  watch(visible, val => {
    if (val === true) {
      setInitActiveButton()
      emit('setDialogFocus', vm as ComponentPublicInstance)
    } else if (val === false) {
      emit('removeDialogFocus')
    }
  })
}

const isCancelButton = computed(() => activeButton.value === BUTTON_TYPE.CANCEL)
const isConfirmButton = computed(
  () => activeButton.value === BUTTON_TYPE.CONFIRM
)
const setInitActiveButton = () => {
  if (props.hasCancel && props.hasConfirm) {
    setActiveButton(props.defaultFocus)
  } else if (props.hasCancel) {
    setCancelButton()
  } else if (props.hasConfirm) {
    setConfirmButton()
  }
}
const setActiveButton = (type: BUTTON_TYPE) => {
  activeButton.value = type
}
const setCancelButton = () => {
  setActiveButton(BUTTON_TYPE.CANCEL)
}
const setConfirmButton = () => {
  setActiveButton(BUTTON_TYPE.CONFIRM)
}
const handleClickCancel = () => {
  setCancelButton()
  ENTER()
}
const handleClickConfirm = () => {
  setConfirmButton()
  ENTER()
}

const LEFT = () => {
  if (props.hasCancel) {
    setCancelButton()
  }
}
const RIGHT = () => {
  if (props.hasConfirm) {
    setConfirmButton()
  }
}
const ENTER = () => {
  if (isCancelButton.value) {
    emit('cancel')
  } else if (isConfirmButton.value) {
    emit('confirm')
  }
}
const BACK = () => {
  emit('close')
}
const EXIT = BACK
const handleActions = <{ [key: string]: () => void }>{
  LEFT,
  RIGHT,
  ENTER,
  BACK,
  EXIT
}
const KEYDOWN = (event: { action: string }) => {
  const action = (event.action || '').toUpperCase()
  if (props.focusControl) {
    handleActions[action]?.()
  }
}

defineExpose({
  KEYDOWN
})
</script>
<style lang="scss" scoped>
@import '@mini-element-plus/utils/bem/mixins.scss';
@import '@mini-element-plus/utils/bem/config.scss';

@include b(dialogModal) {
  position: relative;
  width: 50%;
  padding: 20px;
  margin: 15vh auto 50px;
  margin-top: 15vh;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  background-color: #000;
  border: 1px solid #777;
  border-radius: 2px;
  box-sizing: border-box;
  @include e(header) {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  @include e(body) {
    margin-bottom: 20px;
  }
  @include e(footer) {
    text-align: center;
    @include m(default) {
      display: flex;
      justify-content: center;
      button+button {
        margin-left: 2rem;
      }
    }
  }
}
</style>
