# 遇到的问题
## 搭建vitePress 遇到的问题

#### 侧边栏不高亮问题
```ts
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
```
是因为 在link 前加了 `..` 所以不会有高亮
可以直接以跟目录为准`link: '../zh-CN/component/menu' `

修改后的配置
```ts
function sidebarComponent(){
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
```