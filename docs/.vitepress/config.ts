import { defineConfig, UserConfig } from 'vitepress'



export default defineConfig( {
  lang: 'zh-CN',
  title: 'mini-element-plus',
  description: 'study element-plus',
  base: '/',
  themeConfig: {
    logo: '/logo.jpg',
    nav:nav(),
    sidebar: {
      '/zh-CN/guide/': sidebarGuide(),
      '/zh-CN/component/': sidebarComponent(),
    }
  },
})

function nav() {
  return [
    { text: '指南', link: '/zh-CN/guide/index',activeMatch: '/zh-CN/guide/' },
    { text: '组件', link: '/zh-CN/component/menu',activeMatch: '/zh-CN/component/menu' }
  ]
}
function sidebarGuide() {
  return [
    {
      text: '指南',
      items: [
        { text: '', link: '../zh-CN/guide/index' },
      ]
    }
  ]
}
function sidebarComponent(){
  return [
    {
      text: '基础组件',
      items: [
        { text: 'Menu', link: '../zh-CN/component/menu' },
        { text: 'Modal', link: '../zh-CN/component/modal' }
      ],
      collapsible: true
    }
  ]
}