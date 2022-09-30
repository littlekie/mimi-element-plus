import type { Ref } from 'vue'
import { computed, ref, unref } from 'vue'
import type MenuItemNode from './menu-item-node'

interface IUseSubMenArrow {
  menuItemActiveIndex: Ref<number>
  subMenuData: Ref<MenuItemNode[]>
  id: number
}
export function useSubMenArrow(config: IUseSubMenArrow) {
  const { subMenuData, menuItemActiveIndex } = config
  const maxMenuItemCount = 8
  const offsetAxisY = ref(0)
  const upArrowShow = computed(() => {
    return subMenuData.value.length > 8 && offsetAxisY.value > 0
  })
  const downArrowShow = computed(() => {
    return (
      subMenuData.value.length > 8 &&
      offsetAxisY.value < subMenuData.value.length - 8
    )
  })
  function handlerUpArrow() {
    const currentIndex = unref(menuItemActiveIndex)
    const nodesCount = subMenuData.value.length
    if (nodesCount <= 8) {
      return
    }
    if (
      nodesCount - currentIndex >= maxMenuItemCount &&
      offsetAxisY.value > 0
    ) {
      --offsetAxisY.value
    } else if (currentIndex >= maxMenuItemCount && offsetAxisY.value === 0) {
      offsetAxisY.value = currentIndex - 7
    }
  }

  function handlerDownArrow() {
    const nodesCount = subMenuData.value.length
    if (nodesCount <= 8) {
      return
    }
    const scrollHigh = nodesCount - maxMenuItemCount
    const currentItemIndex = menuItemActiveIndex.value
    if (currentItemIndex >= maxMenuItemCount - 1) {
      if (offsetAxisY.value >= scrollHigh) {
        return
      }
      ++offsetAxisY.value
    } else if (currentItemIndex === 0) {
      offsetAxisY.value = 0
    }
  }

  return {
    downArrowShow,
    upArrowShow,
    handlerDownArrow,
    handlerUpArrow,
    offsetAxisY
  }
}
