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
import { Menu, MenuInstance } from '@mini-element-plus/components/menu'
import { ref, onBeforeUnmount,onMounted } from 'vue'
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
document.addEventListener('keyup', event => {
  reference.value?.KEYDOWN(actions[event.key])
})
</script>

<template>
	<div class="menu_contain" id="menu_contain">
		  <Menu :data="mebuData" ref="reference" :visible="true">
    <template #header>
      <div style="font-size:.3rem;color:red">
        i am menu title
      </div>
    </template>
  </Menu>
	</div>
</template>

<style>
@import '@mini-element-plus/components/menu/style/index.scss';
@import '../../../src/assets/eng.css';
.option-wrapper {
    position: absolute;
}
</style>


<style >
html{
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