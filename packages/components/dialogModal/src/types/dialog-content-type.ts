import { dialogExtraEmits, dialogExtraProps } from './dialog-extra-type'

export const dialogContentProps = {
  center: {
    type: Boolean,
    default: false
  },
  customClass: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  ...dialogExtraProps
}

export const dialogContentEmits = {
  close: () => true,
  ...dialogExtraEmits
}
