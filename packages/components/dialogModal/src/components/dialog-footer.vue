<template>
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
</template>
<script lang="ts" setup>
import { showButton } from '@littlekie/components'
import { useExtraDialog } from '../hooks'
import { DialogExtraEmits, DialogExtraProps } from '../types/dialog-extra-type'
const props = defineProps(DialogExtraProps)
defineEmits(DialogExtraEmits)
const {
  KEYDOWN,
  isCancelButton,
  isConfirmButton,
  handleClickCancel,
  handleClickConfirm
} = useExtraDialog(props)
defineExpose({
  KEYDOWN
})
</script>
