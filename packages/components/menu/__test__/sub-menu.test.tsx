import {  describe, expect, test, vi } from 'vitest'
import MenuItemNode from '../src/menu-item-node'
import { mount, VueWrapper } from '@vue/test-utils'
import {MenuItemProgress, MenuItemProgressInstance, SubMenu, SubMenuInstance } from '..'
import { nextTick, ref } from 'vue'
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
  index: 0,
  mlang_key: 'OPTION_SBTL',
  selected: 0,
  type: -1,
  enable: 1
}
export const subMenuDataContainDisabled = [
  menuItemData,
  {
    data: [],
    iconType: -1,
    index: 1,
    mlang_key: 'OPTION_SBTL1',
    selected: 0,
    type: -1,
    disabled: 1
  },
  {
    data: [],
    iconType: -1,
    index: 2,
    mlang_key: 'OPTION_UAM_DIALOG_ENHANCE_LEVEL',
    selected: 0,
    type: -1,
    disabled: 0
  },
]
const _mountSubMenu = (subMenuData: MenuItemNode[]) =>
  mount(SubMenu, {
    props: {
      id: 0,
      subMenuData
    }
  })

describe('sub-menu', () => {
  test('test sub-menu', async () => {
    const subMenuData = [menuItemData, menuItemData].map(
      item => new MenuItemNode(item)
    )
    const wrapper = _mountSubMenu(subMenuData)
    const vm = wrapper.vm as SubMenuInstance
    expect(vm.currentFocusMenuIndex).toBe(0)
    expect(vm.currentFocusItemIndex).toBe(0)
    expect(vm.id).toBe(0)
    await wrapper.setProps({
      currentFocusItemIndex: 1
    })
    expect(vm.currentFocusItemIndex).toBe(1)
    expect(vm.activeMenu).toBe(true)
    await wrapper.setProps({
      currentFocusMenuIndex: 1,
      currentFocusItemIndex: 0
    })
    expect(vm.activeMenu).toBe(false)
    expect(vm.menuItemActiveIndex).toBe(1)
  })

  test('test sub-menu menu-item click and click item disbaled', async () => {
    const subMenuData = subMenuDataContainDisabled.map(
      item => new MenuItemNode(item)
    )
    const wrapper = _mountSubMenu(subMenuData)
    const vm = wrapper.vm as SubMenuInstance
    const itemList = wrapper.findAllComponents('.wh-list-item')
    expect(itemList.length).toBe(3)
    await itemList[1].trigger('click')
    expect(vm.menuItemActiveIndex).toBe(0)
    await itemList[2].trigger('click')
    expect(vm.menuItemActiveIndex).toBe(2)
  })

  test('test click or enter menu-item had selectedIcon', async () => {
    const subMenuData= [{
      data: [], 
      iconType: 0, 
      index: 0, 
      mlang_key: 'OPTION_SUBTITLES_OFF', 
      selected: 0, 
      type: 0, 
      disabled: 0
    },
    {
      data: [], 
      iconType: 0, 
      index: 1, 
      mlang_key: 'OPTION_SUBTITLES_ON', 
      selected: 1, 
      type: 0, 
      disabled: 0
    },{
      data: [], 
      iconType: 0, 
      index: 2, 
      mlang_key: 'OPTION_SUBTITLES_ON', 
      selected: 0, 
      type: 0, 
      disabled: 1
    },  {
      data: [], 
      iconType: 0, 
      index: 3, 
      mlang_key: 'OPTION_SUBTITLES_ON', 
      selected: 0, 
      type: 0, 
      disabled: 0
    }].map(
      item => new MenuItemNode(item)
    )
    const wrapper = _mountSubMenu(subMenuData)
    const vm = wrapper.vm as SubMenuInstance
    const itemList = await wrapper.findAllComponents('.wh-menu-item')
    expect(itemList.length).toBe(4)
    expect(itemList[0].find('.icon-Selection').exists()).toBe(false)
    expect(itemList[1].find('.icon-Selection').exists()).toBe(true)
    expect(vm.menuItemActiveIndex).toBe(1)
    await itemList[0].trigger('click')
    expect(vm.menuItemActiveIndex).toBe(0)
    expect(itemList[0].find('.icon-Selection').exists()).toBe(true)
    expect(itemList[1].find('.icon-Selection').exists()).toBe(false)
    vm.KEYDOWN('DOWN')
    vm.KEYDOWN('ENTER')
    await nextTick()
    expect(vm.menuItemActiveIndex).toBe(1)
    expect(itemList[0].find('.icon-Selection').exists()).toBe(false)
    expect(itemList[1].find('.icon-Selection').exists()).toBe(true)
    vm.KEYDOWN('DOWN')
    vm.KEYDOWN('ENTER')
    await nextTick()
    expect(vm.menuItemActiveIndex).toBe(3)
    expect(itemList[1].find('.icon-Selection').exists()).toBe(false)
    expect(itemList[3].find('.icon-Selection').exists()).toBe(true)
    vm.KEYDOWN('UP')
    vm.KEYDOWN('ENTER')
    await nextTick()
    expect(vm.menuItemActiveIndex).toBe(1)
    expect(itemList[1].find('.icon-Selection').exists()).toBe(true)
    expect(itemList[3].find('.icon-Selection').exists()).toBe(false)
    wrapper.unmount()
  });

  test('test sub-menu move up down', async () => {
    const subMenuData = subMenuDataContainDisabled.map(
      item => new MenuItemNode(item)
    )
    const foucsIndex = ref(0)
    const wrapper = mount(SubMenu, {
      props: {
        id: 0,
        subMenuData,
      }
    })
    await wrapper.setProps({
      currentFocusItemIndex: foucsIndex
    })
    const vm = wrapper.vm as SubMenuInstance
    vm.KEYDOWN('DOWN')
    expect(vm.menuItemActiveIndex).toBe(2)
    vm.KEYDOWN('DOWN')
    expect(vm.menuItemActiveIndex).toBe(0)
    vm.KEYDOWN('UP')
    expect(vm.menuItemActiveIndex).toBe(2)
    vm.KEYDOWN('UP')
    expect(vm.menuItemActiveIndex).toBe(0)
    wrapper.unmount()
  })

  test('test sub-menu v-model:currentFocusItemIndex', async () => {
    const subMenuData = subMenuDataContainDisabled.map(
      item => new MenuItemNode(item)
    )
    let foucsIndex = ref(0)
    const wrapper = mount({
      setup(){
        return () =>(
        <SubMenu
          id={0}
          subMenuData={subMenuData}
          v-model:currentFocusItemIndex={foucsIndex.value}
          ref='subMenuRef'
      ></SubMenu>
        )}
    })
    const vm = await wrapper.findComponent({ ref: 'subMenuRef' }).vm as SubMenuInstance
    vm.KEYDOWN('DOWN')
    expect(foucsIndex.value).toBe(2)
    vm.KEYDOWN('DOWN')
    expect(foucsIndex.value).toBe(0)
  });

  test('test menu-item-progress', async () => {
    let progressValue = ref(0)
    const wrapper = mount({
      setup() {
        return () =>(
              <MenuItemProgress
                  v-model={progressValue.value}
                  max-size={100}
                  min-size={0}
                  ref='menuItemProgressRef'
              ></MenuItemProgress>
        )}
    })
    const vm = await wrapper.findComponent({ref: 'menuItemProgressRef'}).vm as MenuItemProgressInstance
    vm.RIGHT()
    expect(progressValue.value).toBe(1)
    progressValue.value += 1
    await nextTick()
    expect(progressValue.value).toBe(2)
    vm.RIGHT()
    expect(progressValue.value).toBe(3)
    await nextTick()
    expect(wrapper.text()).toBe('3')
    wrapper.unmount()
  });

  test('test menu-item-progress in sub-menu', async () => {
    const subMenuData = [{
      data: [],
      iconType: -1,
      index: 3,
      mlang_key: 'OPTION_UAM_DIALOG_ENHANCE_LEVEL',
      selected: 0,
      type: 2,
      disabled: 0
    }].map(
      item => new MenuItemNode(item)
    )
    let foucsIndex = ref(10)
    const wrapper = mount({
      setup(){
        return () =>(
        <SubMenu
          id={0}
          subMenuData={subMenuData}
          v-model:currentFocusItemIndex={foucsIndex.value}
          ref='subMenuRef'
      ></SubMenu>
        )}
    })
    const vm = await wrapper.findComponent({ ref: 'subMenuRef' }).vm as SubMenuInstance
    vm.KEYDOWN('LEFT')
    expect(subMenuData[0].progressValue).toBe(0)
    vm.KEYDOWN('RIGHT')
    expect(subMenuData[0].progressValue).toBe(1)
  });

  test('test on change progress', async() => {
    const subMenuData = [{
      data: [],
      iconType: -1,
      index: 3,
      mlang_key: 'OPTION_UAM_DIALOG_ENHANCE_LEVEL',
      selected: 0,
      type: 2,
      disabled: 0
    }].map(
      item => new MenuItemNode(item)
    )
    let foucsIndex = ref(10)
    const volumeBarAdjustCounts = vi.fn()

    const wrapper = mount({
      setup() {
        return () =>(
        <SubMenu
          id={0}
          subMenuData={subMenuData}
          onVolumeBarAdjust={volumeBarAdjustCounts}
          v-model:currentFocusItemIndex={foucsIndex.value}
          ref='subMenuRef'
      ></SubMenu>
        )}
    })
    const subMenuWraper = await wrapper.findComponent({ ref: 'subMenuRef' })
    const vm = subMenuWraper.vm as SubMenuInstance
    vm.KEYDOWN('RIGHT')
    await nextTick()
     const receiveItem =  subMenuWraper.emitted().volumeBarAdjust[0] as [MenuItemNode]
    expect(receiveItem[0].progressValue).toEqual(1)
    expect(volumeBarAdjustCounts).toHaveBeenCalledTimes(1)
    vm.$emit('volumeBarAdjust', subMenuData[0])
    expect(volumeBarAdjustCounts).toHaveBeenCalledTimes(2)
    // TODO 怎么记录组件多次触发emit 事件，为什么目前只能拦截一次？
    // 通过 vm.$emit 手动触发可以拦截多次
  });

  test('test submenu cssHeaderTitle', async () => {
    const subMenuData = subMenuDataContainDisabled.map(
      item => new MenuItemNode(item)
    )
    const wrapper = mount({
      setup(){
        return () =>(
        <SubMenu
          id={0}
          subMenuData={subMenuData}
          ref='subMenuRef'
        />
        )}
    })
    const vm = await wrapper.findComponent({ ref: 'subMenuRef' }).vm as SubMenuInstance
    expect(vm.cssHeaderTitle).toBe(undefined)
    expect(wrapper.find('.wh-sc-header-title').exists()).toBe(false)
    await wrapper.setProps({
      cssHeaderTitle:'Subtitles'
    })
    expect(wrapper.find('.wh-sc-header-title').isVisible()).toBe(true)
  });

  test('test slot headerTitle', async () => {
    const subMenuData = subMenuDataContainDisabled.map(
      item => new MenuItemNode(item)
    )
    const wrapper = mount((SubMenu),{
      slots: {
        header: () => <span>Subtitles</span>
      },
      props: {
        id: 0,
        subMenuData,
      }
    }
    )
    expect(wrapper.text()).toContain('Subtitles')
    expect(wrapper.html()).toContain('<span>Subtitles</span>')
  });

  test('tets arrowUp arrowDown', () => {
    
  });
})
