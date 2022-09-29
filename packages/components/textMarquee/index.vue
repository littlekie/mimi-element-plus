<template>
  <div ref="wrapper" class="marqueeDiv" tabindex="-1">
    <div :class="['marquee-warpper', fullScroll ? 'full' : 'normal']">
      <span
        v-if="i18nText"
        class="textContent"
        :data-active="active"
        :class="i18nText"
      />
      <span v-else-if="text" class="textContent" :data-active="active">
        {{ showText }}
      </span>
      <span
        v-else
        class="textContent"
        :data-active="active"
        v-html="showHtml"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  toRefs
} from 'vue'
export default defineComponent({
  name: 'TextMarquee',

  props: {
    text: {
      type: String as PropType<string>,
      default: ''
    },
    i18nText: {
      type: String as PropType<string>,
      default: ''
    },
    html: {
      type: String as PropType<string>,
      default: ''
    },
    active: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    delay: {
      type: Number as PropType<number>,
      default: 1500
    },
    speed: {
      type: Number as PropType<number>,
      default: 60
    },
    fullScroll: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    loop: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    isArab: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props) {
    const { text, html, active, delay, speed, fullScroll, loop } = toRefs(props)
    const showText = computed(() => {
        return props.isArab
          ? text.value.split(/\s/).reverse().join(' ')
          : text.value
      }),
      showHtml = computed(() => {
        return props.isArab
          ? html.value.split(/\s/).reverse().join(' ')
          : html.value
      })
    onMounted(() => {
      methods.checkScroll()
    })
    onUnmounted(() => {
      methods.clear()
    })
    onUpdated(() => {
      methods.clear()
      methods.checkScroll()
    })
    const wrapper = ref<HTMLElement>()
    function getTextContentWrapper(): null | HTMLElement {
      return wrapper.value?.getElementsByClassName(
        'textContent'
      )[0] as HTMLElement
    }
    const methods = {
      clear(el: null | HTMLElement = null) {
        let target: HTMLElement | null = el || getTextContentWrapper()
        if (target) {
          target.style.display = ''
          target.style.textIndent = '0'
          target.style.animation = ''
          if (!loop.value) {
            target.removeEventListener(
              'animationend',
              methods.animationendCallback
            )
          }
          target = null
        }
      },
      checkScroll() {
        let el = getTextContentWrapper()
        if (el) {
          if (active.value) {
            let warpperEl = wrapper.value!.firstElementChild
            const warpperElScrollWidth = warpperEl!.scrollWidth
            const warpperElClientWidth = warpperEl!.clientWidth
            if (warpperElScrollWidth === warpperElClientWidth) {
              el.style.display = 'inline-block'
            }
            if (warpperElScrollWidth > warpperElClientWidth) {
              el.style.display = 'inline-block'
              const scrollTime =
                (warpperElScrollWidth * 1.05 * 1000) / speed.value
              el.style.animation = `${props.isArab ? 'ara-' : ''}${
                fullScroll.value ? 'full-' : ''
              }srcoll ${scrollTime}ms linear ${delay.value}ms ${
                loop.value ? 'infinite' : ''
              }`
              if (!loop.value) {
                el.addEventListener(
                  'animationend',
                  methods.animationendCallback
                )
              }
              if (fullScroll.value) {
                el.style.textIndent = `${warpperElClientWidth}px`
              } else {
                el = null
              }
            }
            warpperEl = null
          } else {
            methods.clear(el)
          }
        }
        el = null
      },
      animationendCallback(evt: any, el?: any) {
        methods.clear(el || evt.target)
      }
    }
    return {
      showText,
      showHtml,
      wrapper
    }
  }
})
</script>

<style lang="scss" scoped>
.marqueeDiv {
  max-width: 100%;
}
.marquee-warpper {
  width: 100%;
  height: 110%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<style>
@keyframes full-srcoll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-105%);
  }
}
@keyframes srcoll {
  0%,
  10% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-105%);
  }
}
@keyframes ara-full-srcoll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(105%);
  }
}
@keyframes ara-srcoll {
  0%,
  10% {
    transform: translateX(0);
  }

  to {
    transform: translateX(105%);
  }
}
</style>
