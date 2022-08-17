import { UserConfig } from 'vitepress'

const nav = [
  { text: '首页', link: '/' },
  { text: '组件', link: '/zh-CN/components/menu', target: '_blank' }
  // //通过items数组设置下拉列表
  // {
  //   text: 'Languages',
  //   ariaLabel: 'Language Menu',
  //   items: [
  //     { text: 'Chinese', link: '/language/chinese/' },
  //     { text: 'Japanese', link: '/language/japanese/' }
  //   ]
  // },
]

const sidebar = [
  {
    text: '基础组件',
    items: [
      { text: 'Menu', link: '../zh-CN/components/menu' },
      { text: 'Modal', link: '../zh-CN/components/modal' },
      { text: 'Modal123', link: '../zh-CN/components/modal' }
    ],
    collapsible: true
  }
]

const config: UserConfig = {
  lang: 'zh-CN',
  title: 'mini-element-plus',
  description: 'study element-plus',
  base: '/',
  themeConfig: {
    logo: '/logo.jpg',
    nav,
    sidebar
  }
  /*  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    }
  } */
}

export default config
