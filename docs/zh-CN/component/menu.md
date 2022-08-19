---
title: Menu
lang: en-US
---

# Menu

tv 侧边栏 Menu

## 基础用法

<Menu />

<script setup>
import Menu from '../../examples/menu/menu.vue'
</script>

### 源码使用方式
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Menu, MenuInstance } from '@mini-element-plus/components/menu'
import { mebuData } from '@mini-element-plus/components/menu/__test__/mock'
import '@mini-element-plus/components/menu/style/index.scss'
const reference = ref<MenuInstance>()
const actions: any = {
  ArrowDown: 'DOWN',
  ArrowUp: 'UP',
  ArrowLeft: 'LEFT',
  ArrowRight: 'RIGHT',
  Enter: 'ENTER',
  Backspace: 'BACK',
  Escape: 'BACK'
}
onMounted(() => {
  window.document.addEventListener('keyup', event => {
    reference.value?.KEYDOWN(actions[event.key])
  })
})
const isShow = ref(false)
</script>

<template>
  <div class="menu_contain" id="menu_contain">
    <Menu :data="mebuData" @closeMenu="isShow=false" ref="reference" :visible="isShow">
      <template #header>
        <div style="font-size:.3rem;color:red">
          i am menu title
        </div>
      </template>
    </Menu>
  </div>
  <div style="background:#A3FE65" @click="isShow = !isShow">toggle menu</div>
</template>

<style>
@import '@mini-element-plus/components/menu/style/index.scss';
@import '../../../src/assets/eng.css';
.menu_contain {
  position: relative;
}
.option-wrapper {
  position: relative;
}
</style>
<style>
html {
  font-size: 40px;
}
</style>

```
  data: IMenuItemData[]
  cssHeaderTitle?: string
  headerTitle?: string
  visible?: boolean
## Menu 属性

| Name       | Description                      | Type                | Default | Required |
| ---------- | -------------------------------- | ------------------- | ------- | -------- |
| `data`     | 侧边栏的数据格式                    | `IMenuItemData[]`   | `[]`    | Yes      |
| `cssHeaderTitle`     | 侧边栏css头部文字         | `string`            | `''`    | Noe      |
| `headerTitle`     | 文本的头部文字            | `string`            | `''`    | Noe      |
| `visible`     | 当前 Menu 是否要显示             | `boolean`           | `true`  | Noe      |