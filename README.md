# mimi-element-plus
## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## githooks 钩子没有被触发的原因
在 `.git config` 文件中 hooksPath = .husky 这一行删除即可
```bash
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
	hooksPath = .husky #这一行删除
```
有可能之前安装了 .husky 后面又没用了把 hooksPath = .husky 这一行删除

要使用 pnpm unnistall husky

### pnpm install 执行完后 ，似乎不会触发 
yorkie   "install": "node bin/install.js",
导致不会触发 commit-msg 钩子

### 可尝试把 yorkie 替代为 yorkie-pnpm