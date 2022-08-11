import { onBeforeUpdate, ref, Ref } from 'vue'

export type TemplateRefsList<T> = T[] & {
  set(el: Object | null): void
}

export function useTemplateRefsList<T = Element>(): Readonly<Ref<Readonly<TemplateRefsList<T>>>> {
  const refsList = ref<unknown>([]) as Ref<TemplateRefsList<T>>
  refsList.value.set = (el: Object | null) => {
    if (el) {
      refsList.value.push(el as T)
    }
  }
  onBeforeUpdate(() => {
    refsList.value.length = 0
  })
  return refsList
}
