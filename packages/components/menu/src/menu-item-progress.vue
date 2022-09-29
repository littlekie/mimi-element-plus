<template>
  <div
    class="wh-option-progress menu-item-progress"
    :class="{ highlight: isFocus }"
    role="menuItemBar"
  >
    <div class="wh-ap-currentValue">
      <div class="wh-apc-line">
        <div :style="{ width: progressWidth }" class="wh-apc-progress" />
        <div
          :style="{ left: (modelValue / maxSize) * 100 + '%' }"
          class="wh-apc-ball"
        />
      </div>
    </div>
    <div class="wh-ap-maxSize">{{ modelValue }}</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick } from 'vue'
export default defineComponent({
  name: 'MenuItemProgress',
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    maxSize: {
      type: Number,
      default: 0
    },
    minSize: {
      type: Number,
      default: 0
    },
    isFocus: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'onChange'],
  setup(props, { emit, expose }) {
    const progressWidth = computed(() => {
      const currentValue = props.modelValue + props.minSize,
        maxSize = props.maxSize + props.minSize
      return `${(currentValue / maxSize) * 100}%`
    })
    function LEFT() {
      if (props.modelValue > props.minSize) {
        setModelValue(props.modelValue - 1)
      }
    }
    function RIGHT() {
      if (props.modelValue < props.maxSize) {
        setModelValue(props.modelValue + 1)
      }
    }
    function setModelValue(modelValue: number) {
      emit('update:modelValue', modelValue)
      nextTick().then(() => emit('onChange', modelValue))
    }
    expose({
      RIGHT,
      LEFT
    })
    return {
      progressWidth,
      RIGHT,
      LEFT
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/index.scss';
</style>
