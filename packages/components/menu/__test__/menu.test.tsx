import Menu from '../src/menu.vue'
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import type { MenuInstance } from '..'
import type MenuItemNode from '../src/menu-item-node'
const subTitleData = [
  {
    data: [], //子集数据
    iconType: 0, //String型，图标类型，为-1时指不带图标
    index: 0, //item的下标
    mlang_key: 'OPTION_SUBTITLES_OFF', //多语言字段
    selected: 0, //当前是否为选中状态
    type: 0, //是否包含子集,默认为-1
    disabled: 0 //非必传项，默认为0
  },
  {
    data: [], //子集数据
    iconType: 0, //String型，图标类型，为-1时指不带图标
    index: 1, //item的下标
    mlang_key: 'OPTION_SUBTITLES_ON', //多语言字段
    selected: 1, //当前是否为选中状态
    type: 0, //是否包含子集,默认为-1
    disabled: 0 //非必传项，默认为0
  }
]
const menuData = {
  data: subTitleData,
  iconType: -1,
  index: 0,
  mlang_key: 'OPTION_SBTL',
  selected: 0,
  type: -1,
  enable: 1
}

describe('Name of the Menu', () => {
  const cssName = ref('')
  function enterMenuItem(menuItem: MenuItemNode) {
    cssName.value = menuItem.cssName
  }
  test('test only a Menu currentItemIndex', async () => {
    const wrapper = mount({
      setup() {
        return () => {
          return (
            <Menu data={subTitleData} ref="menuRef" onOnEnter={enterMenuItem} />
          )
        }
      }
    })
    const menuRef = (await wrapper.findComponent({ ref: 'menuRef' })
      .vm) as MenuInstance
    expect(menuRef.currentItemIndex).toBe(1)
    expect(menuRef.subMenuRefList.length).toBe(1)
    expect(menuRef.subMenuRefList[0].menuItemActiveIndex).toBe(1)
    menuRef.KEYDOWN('UP')
    await nextTick()
    expect(menuRef.subMenuRefList[0].menuItemActiveIndex).toBe(0)
    expect(menuRef.currentItemIndex).toBe(0)
    menuRef.KEYDOWN('ENTER')
    expect(cssName.value).toBe(subTitleData[0].mlang_key)
  })

  test('test enter openNextMneu', async () => {
    const openNextMneuData = [
      {
        data: subTitleData,
        iconType: -1,
        index: 0,
        mlang_key: 'OPTION_SBTL',
        selected: -1,
        type: -1,
        enable: 1
      },
      {
        data: [
          {
            data: [], //子集数据
            iconType: 0, //String型，图标类型，为-1时指不带图标
            index: 0, //item的下标
            mlang_key: 'OPTION_SUBTITLES_OFF1', //多语言字段
            selected: 1, //当前是否为选中状态
            type: 0, //是否包含子集,默认为-1
            disabled: 0 //非必传项，默认为0
          },
          {
            data: [], //子集数据
            iconType: 0, //String型，图标类型，为-1时指不带图标
            index: 1, //item的下标
            mlang_key: 'OPTION_SUBTITLES_ON1', //多语言字段
            selected: 0, //当前是否为选中状态
            type: 0, //是否包含子集,默认为-1
            disabled: 0 //非必传项，默认为0
          }
        ],
        iconType: -1,
        index: 1,
        mlang_key: 'OPTION_SBTL111',
        selected: -1,
        type: -1,
        enable: 1
      }
    ]
    const wrapper = mount({
      setup() {
        return () => {
          return (
            <Menu
              data={openNextMneuData}
              ref="menuRef"
              onOnEnter={enterMenuItem}
            />
          )
        }
      }
    })
    const menuRef = (await wrapper.findComponent({ ref: 'menuRef' })
      .vm) as MenuInstance
    expect(menuRef.currentItemIndex).toBe(0)
    menuRef.KEYDOWN('DOWN')
    expect(menuRef.currentItemIndex).toBe(1)
    expect(menuRef.currentMenuIndex).toBe(0)
    menuRef.KEYDOWN('ENTER')
    await nextTick()
    expect(menuRef.currentItemIndex).toBe(0)
    expect(menuRef.currentMenuIndex).toBe(1)
    expect(
      menuRef.menuList[menuRef.currentMenuIndex][menuRef.currentItemIndex]
        .cssName
    ).toBe('OPTION_SUBTITLES_OFF1')
    expect(menuRef.activeMenuItemRecord['0']).toBe(1)
    menuRef.KEYDOWN('BACK')
    await nextTick()
    expect(menuRef.menuList.length).toBe(1)
    expect(menuRef.currentItemIndex).toBe(1)
    menuRef.KEYDOWN('BACK')
  })

  test('test click openNextMneu', async () => {
    const openNextMneuData = [
      {
        data: subTitleData,
        iconType: -1,
        index: 0,
        mlang_key: 'OPTION_SBTL',
        selected: -1,
        type: -1,
        enable: 1
      },
      {
        data: [
          {
            data: [], //子集数据
            iconType: 0, //String型，图标类型，为-1时指不带图标
            index: 0, //item的下标
            mlang_key: 'OPTION_SUBTITLES_OFF1', //多语言字段
            selected: 1, //当前是否为选中状态
            type: 0, //是否包含子集,默认为-1
            disabled: 0 //非必传项，默认为0
          },
          {
            data: [], //子集数据
            iconType: 0, //String型，图标类型，为-1时指不带图标
            index: 1, //item的下标
            mlang_key: 'OPTION_SUBTITLES_ON1', //多语言字段
            selected: 0, //当前是否为选中状态
            type: 0, //是否包含子集,默认为-1
            disabled: 0 //非必传项，默认为0
          }
        ],
        iconType: -1,
        index: 1,
        mlang_key: 'OPTION_SBTL111',
        selected: -1,
        type: -1,
        enable: 1
      }
    ]
    const wrapper = mount({
      setup() {
        return () => {
          return (
            <Menu
              data={openNextMneuData}
              ref="menuRef"
              onOnEnter={enterMenuItem}
            />
          )
        }
      }
    })
    const menuRef = (await wrapper.findComponent({ ref: 'menuRef' })
      .vm) as MenuInstance
    expect(menuRef.currentItemIndex).toBe(0)
    const menuItemList = wrapper.findAllComponents('.wh-list-item')
    await menuItemList[1].trigger('click')
    expect(menuRef.currentItemIndex).toBe(0)
    expect(menuRef.currentMenuIndex).toBe(1)
    expect(menuRef.currentMenuIndex).toBe(1)
    await menuItemList[1].trigger('click')
    expect(menuRef.menuList.length).toBe(2)
    await menuItemList[0].trigger('click')
    expect(menuRef.currentItemIndex).toBe(1)
    expect(menuRef.currentMenuIndex).toBe(1)
  })

  test('enter click deep openNextMneu', async () => {
    const openNextMneuData = [
      {
        data: subTitleData,
        iconType: -1,
        index: 0,
        mlang_key: 'OPTION_SBTL',
        selected: -1,
        type: -1,
        enable: 1
      },
      {
        data: [
          {
            data: [
              {
                data: [
                  {
                    data: subTitleData,
                    iconType: -1,
                    index: 0,
                    mlang_key: 'OPTION_SBTL',
                    selected: -1,
                    type: -1,
                    enable: 1
                  }
                ], //子集数据
                iconType: 0, //String型，图标类型，为-1时指不带图标
                index: 0, //item的下标
                mlang_key: 'OPTION_SUBTITLES_OFF1', //多语言字段
                selected: -1, //当前是否为选中状态
                type: -1, //是否包含子集,默认为-1
                disabled: 0 //非必传项，默认为0
              }
            ], //子集数据
            iconType: 0, //String型，图标类型，为-1时指不带图标
            index: 0, //item的下标
            mlang_key: 'OPTION_SUBTITLES_OFF1', //多语言字段
            selected: 1, //当前是否为选中状态
            type: 0, //是否包含子集,默认为-1
            disabled: 0 //非必传项，默认为0
          }
        ],
        iconType: -1,
        index: 1,
        mlang_key: 'OPTION_SBTL111',
        selected: -1,
        type: -1,
        enable: 1
      }
    ]
    const wrapper = mount({
      setup() {
        return () => {
          return (
            <Menu
              data={openNextMneuData}
              ref="menuRef"
              onOnEnter={enterMenuItem}
            />
          )
        }
      }
    })
    const menuRef = (await wrapper.findComponent({ ref: 'menuRef' })
      .vm) as MenuInstance
    menuRef.KEYDOWN('DOWN')
    menuRef.KEYDOWN('ENTER')
    await nextTick()
    expect(menuRef.currentItemIndex).toBe(0)
    expect(menuRef.currentMenuIndex).toBe(1)
    menuRef.KEYDOWN('ENTER')
    expect(menuRef.currentMenuIndex).toBe(2)
    const menuItemList = wrapper.findAllComponents('.wh-list-item')
    await menuItemList[0].trigger('click')
    expect(menuRef.currentItemIndex).toBe(1)
    expect(menuRef.currentMenuIndex).toBe(1)
    wrapper.unmount()
  })

  test('test Menu slot headerTitle ', async () => {
    const wrapper = mount(Menu, {
      slots: {
        header: () => <span>Subtitles1</span>
      },
      props: {
        data: [menuData]
      }
    })
    expect(wrapper.text()).toContain('Subtitles1')
    expect(wrapper.html()).toContain('<span>Subtitles1</span>')
  })
})
