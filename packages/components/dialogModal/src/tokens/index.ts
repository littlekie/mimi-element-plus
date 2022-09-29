import type { useNamespace } from '@littlekie/hooks'
import type {
  CSSProperties,
  ComputedRef,
  InjectionKey,
  PropType,
  Ref
} from 'vue'
export type DialogContext = {
  style: ComputedRef<CSSProperties>
  ns: ReturnType<typeof useNamespace>
  visible: Ref<boolean>
}

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol('dialogInjectionKey')
export const definePropType = <T>(val: any): PropType<T> => val
