import {describe, expect, test } from 'vitest'
import MenuItemNode, { NodeType } from '../src/menu-item-node'
import { mount, VueWrapper } from '@vue/test-utils'
import MenuItem from '../src/menu-item.vue'
import { MenuItemInstance } from '..'
const menuItemData = {
  data: [
    {
      data: [], //子集数据
      iconType: 0, //String型，图标类型，为-1时指不带图标
      index: 0, //item的下标
      mlang_key: 'OPTION_SUBTITLES_OFF', //多语言字段
      selected: 1, //当前是否为选中状态
      type: 0, //是否包含子集,默认为-1
      disabled: 0 //非必传项，默认为0
    }
  ],
  iconType: -1,
  index: 2,
  mlang_key: 'OPTION_SBTL',
  selected: 0,
  type: -1,
  enable: 1
}
const _mountMenuItem = (menuItemNode: MenuItemNode) =>
  mount(MenuItem, {
    props: {
      id: 1,
      node: menuItemNode,
      currentFocusItemIndex: 0,
      currentFocusMenuItemIndex: 0
    }
  })
describe('Menu-item', () => {
  test('should be a string', () => {
    expect(typeof 'Menu').toBe('string')
  })
  test('test menuItem data', () => {
    let menuItem = new MenuItemNode(menuItemData)
    expect(menuItem.hasChildren).toBe(true)
    expect(menuItem.isChecked).toBe(false)
    expect(menuItem.isDisabled).toBe(false)
    menuItem = new MenuItemNode(menuItemData.data[0])
    expect(menuItem.isChecked).toBe(true)
    expect(menuItem.nodeType).toBe(NodeType.IS_RADIO)
    expect(menuItem.isLeaf).toBe(true)
  })

  // The component to test
  test('test create menu-item', async () => {
    let menuItemNode = new MenuItemNode(menuItemData)
    expect(menuItemNode.isLeaf).toBe(false)
    const wrapper = _mountMenuItem(menuItemNode)
    const whMenuItm = (await wrapper.findComponent(
      '.wh-menu-item'
    )) as VueWrapper<any>
    const vm = whMenuItm.vm as MenuItemInstance
    expect(vm.hasExpandIcon).toBe(true)
  })

  test('test  MenuItem has slectedIcon ', async () => {
    let menuItemNode = new MenuItemNode(menuItemData.data[0])
    const wrapper = _mountMenuItem(menuItemNode)
    const whMenuItm = (await wrapper.findComponent(
      '.wh-menu-item'
    )) as VueWrapper<any>
    const vm = whMenuItm.vm as MenuItemInstance
    expect(vm.hasCheckIcon).toBe(true)
    const iconWraper = wrapper.find('.iconfont')
    expect(iconWraper.classes('icon-Selection')).toBe(true)
  })
})
