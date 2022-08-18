import { defineConfig } from 'vitepress'
const IS_DEV = process.env.NODE_ENV === 'development'
export default defineConfig({
  lang: 'zh-CN',
  title: 'mini-element-plus',
  description: 'study element-plus',
  base: IS_DEV ? '/' : '/mimi-element-plus/',
  themeConfig: {
    logo: '/logo.jpg',
    nav: nav(),
    sidebar: {
      '/zh-CN/guide/': sidebarGuide(),
      '/zh-CN/component/': sidebarComponent()
    }
  }
})

function nav () {
  return [
    {
      text: '指南',
      link: '/zh-CN/guide/introduction',
      activeMatch: '/zh-CN/guide/'
    },
    {
      text: '组件',
      link: '/zh-CN/component/menu',
      activeMatch: '/zh-CN/component/'
    }
  ]
}
function sidebarGuide () {
  return [
    {
      text: '指南',
      items: [
        { text: '简介', link: '/zh-CN/guide/introduction' },
        { text: '遇到的问题', link: '/zh-CN/guide/problem' }
      ]
    }
  ]
}
function sidebarComponent () {
  return [
    {
      text: '基础组件',
      items: [
        { text: 'Menu', link: '/zh-CN/component/menu' },
        { text: 'Modal', link: '/zh-CN/component/modal' }
      ],
      collapsible: true
    }
  ]
}
