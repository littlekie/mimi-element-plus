import { dialogContentProps } from './dialog-content-type'
import { ExtractPropTypes } from 'vue'
import { definePropType } from '../tokens'
import { dialogExtraEmits } from './dialog-extra-type'

export const dialogProps = {
  ...dialogContentProps,
  modelValue: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: definePropType<DialogBeforeCloseFn>(Function)
  },
  onModalClickClose: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  modalClass: String,
  top: {
    type: String
  },
  width: {
    type: [String, Number]
  }
}
export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  open: () => true,
  close: () => true,
  ['update:modelValue']: (value: boolean) => value,
  ...dialogExtraEmits
}
export type DialogEmits = typeof dialogEmits

type DoneFn = (cancel?: boolean) => void
export type DialogBeforeCloseFn = (done: DoneFn) => void
