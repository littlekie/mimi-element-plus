import { ComponentPublicInstance, PropType } from 'vue'
import { BUTTON_TYPE } from '../useDialog'

export const dialogExtraEmits = {
  cancel: () => true,
  confirm: () => true,
  setDialogFocus: (vm: ComponentPublicInstance) => true,
  removeDialogFocus: () => true
}
export const dialogExtraProps = {
  hasCancel: {
    type: Boolean,
    default: true,
  },
  hasConfirm: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: 'cancel_btn'
  },
  confirmText: {
    type: String,
    default: 'confirm_btn'
  },
  defaultFocus: {
    type: String as PropType<BUTTON_TYPE>,
    default: BUTTON_TYPE.CANCEL
  },
  focusControl: {
    type: Boolean,
    default: true
  },
}