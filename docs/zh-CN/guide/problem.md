# 遇到的问题
## 搭建vitePress 遇到的问题

### 侧边栏不高亮问题
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

::: warn
是因为 在link 前加了 `..` 所以不会有高亮
可以直接以跟目录为准`link: '/zh-CN/component/menu' `
建议使用绝对路径，相对路径可能会出现类似的问题
:::

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

## 搭建自动部署问题
可以在跟目录创建 `.github/workflows/deploy.yml`
::: tip
`- name: Install PNPM`
` run: npm i -g pnpm`
或者 使用以下方式
`- name: Setup pnpm`
`  uses: pnpm/action-setup@v2`

是`commit_message` 不是 `commit-message`
:::

```yaml
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
          commit_message: website deploy
```

[deploy相关配置](https://vuepress.vuejs.org/)