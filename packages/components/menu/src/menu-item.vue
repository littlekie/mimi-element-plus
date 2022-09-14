<template>
  <div
    :id="id + ''"
    class="wh-list-item wh-menu-item"
    :class="{
      is_disabled: node.isDisabled,
      highlight: isFocus,
      in_active_path: isActive
    }"
    role="menuItem"
  >
    <div
      v-if="prefixIcon"
      class="iconfont menuItem__Prefix"
      :class="prefixIcon"
    ></div>
    <div class="wh-item-content">
      <TextMarquee
        :fullScroll="false"
        :delay="-1000"
        :i18n-text="node.cssName"
        :text="node.cssName ? '' : node.text"
        :active="isFocus"
      />
      <span>{{ node.nameExtra }}</span>
    </div>
    <!-- postfix_content -->
    <div
      v-if="hasExpandIcon"
      class="iconfont menuItem__postfix icon-Keypad_right"
    ></div>
    <div
      v-else-if="hasCheckIcon"
      class="iconfont menuItem__postfix icon-Selection"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import MenuItemNode from './menu-item-node'
import TextMarquee from '@mini-element-plus/components/textMarquee/index.vue'
const ICON_TYPE_CLASSNAME: Record<number, string> = {
  0: 'icon-epg-DVB',
  1: 'icon-epg-TXT',
  2: 'icon-epg-Hearing_Impaired_d',
  3: 'icon-Visually_Impaired_d',
  4: 'icon-epg-Dolby_d',
  5: 'icon-epg_AAC'
}
const props = defineProps<{
  node: MenuItemNode
  id: number
  isFocus?: boolean
  isActive?: boolean
}>()
const prefixIcon = computed(() =>
  props.node.iconType > -1 ? ICON_TYPE_CLASSNAME[props.node.iconType] : null
)
const hasExpandIcon = computed(
  () => !props.node.isLeaf && !props.node.isDisabled
)
const hasCheckIcon = computed(() => props.node.isLeaf && props.node.isChecked)

defineExpose({
  hasExpandIcon,
  hasCheckIcon
})
</script>
<style lang="scss" scoped>
  @import '../style/index.scss';
</style>
