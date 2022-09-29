<template>
  <div
    v-if="mask"
    :class="[ns.b(), ns.m('mask'), overlayClass]"
    :style="{ zIndex }"
    @click="customMaskEvent ? () => {} : onModalClick"
  >
    <slot name="default" />
  </div>
  <div
    v-else
    :class="[ns.b(), ns.m('fixed'), overlayClass]"
    :style="{ zIndex }"
  >
    <slot name="default" />
  </div>
</template>
<script lang="ts" setup>
import { definePropType } from '../tokens'
import { useNamespace } from '@littlekie/hooks'
defineProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: definePropType<string | string[] | Record<string, boolean>>([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType<number | 'auto'>([String, Number])
  }
})
const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent
})
const onModalClick = (e: MouseEvent) => {
  emit('click', e)
}
const ns = useNamespace('overlay')
</script>

<style lang="scss" scoped>
@import '@littlekie/utils/bem/mixins.scss';
@import '@littlekie/utils/bem/config.scss';

@include b(overlay) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  overflow: auto;
  @include m(fixed) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  @include m(mask) {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
