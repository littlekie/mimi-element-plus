import type { Ref } from 'vue'
import { ref } from 'vue'
import type MenuItemNode from './menu-item-node'

interface IUseSubMenArrow {
  menuItemActiveIndex: Ref<number>
  subMenuData: Ref<MenuItemNode[]>
  id: number
}
export function useSubMenArrow(config: IUseSubMenArrow) {
  const { subMenuData, menuItemActiveIndex, id } = config
  const maxMenuItemCount = 8
  const upArrowShow = ref(false)
  const downArrowShow = ref(false)
  function showDownIcon() {
    downArrowShow.value = true
  }
  function hideDownIcon() {
    downArrowShow.value = false
  }
  function showUpIcon() {
    upArrowShow.value = true
  }
  function hideUpIcon() {
    upArrowShow.value = false
  }
  function handlerUpArrow() {
    const currentIndex = menuItemActiveIndex.value
    const nodesCount = subMenuData.value.length
    const menuContentListTop = getCurrentMenuContentListTop()
    if (currentIndex === 0) {
      hideUpIcon()
    }
    if (
      nodesCount - currentIndex >= maxMenuItemCount &&
      menuContentListTop < 0
    ) {
      setCurrentMenuContentList(menuContentListTop + 105)
      showDownIcon()
    } else if (currentIndex >= maxMenuItemCount && menuContentListTop === 0) {
      setCurrentMenuContentList(-105 * (currentIndex - 7))
      hideDownIcon()
      showUpIcon()
    } else if (currentIndex < maxMenuItemCount && menuContentListTop === 0) {
      showUpIcon()
    } else {
      hideDownIcon()
    }
  }

  async function handlerDownArrow() {
    const nodesCount = subMenuData.value.length
    const scrollHigh = (nodesCount - maxMenuItemCount) * 105 * -1
    const currentItemIndex = menuItemActiveIndex.value

    if (currentItemIndex >= maxMenuItemCount - 1) {
      if (getCurrentMenuContentListTop() <= scrollHigh) {
        return
      }
      setCurrentMenuContentList(getCurrentMenuContentListTop() - 105)
      showUpIcon()
    } else if (currentItemIndex === 0) {
      setCurrentMenuContentList(0)
      hideUpIcon()
    }
    if (nodesCount - currentItemIndex > 2) {
      showDownIcon()
    } else {
      hideDownIcon()
    }
  }
  function getCurrentMenuContentListTop() {
    const currentMenuContentList = document.querySelectorAll(
      '.wh-sidebar .wh-sc-content-list'
    )[id] as HTMLElement
    const listTop = currentMenuContentList?.style?.top || '0px'
    return Math.ceil(Number(listTop.replace('px', '')))
  }
  function setCurrentMenuContentList(top: number) {
    const currentMenuContentList = document.querySelectorAll(
      '.wh-sidebar .wh-sc-content-list'
    )[id] as HTMLElement
    if (currentMenuContentList?.style) {
      currentMenuContentList.style.top = `${top}px`
    }
  }

  return {
    downArrowShow,
    upArrowShow,
    handlerDownArrow,
    handlerUpArrow,
    showDownIcon,
    hideDownIcon,
    showUpIcon,
    hideUpIcon
  }
}
