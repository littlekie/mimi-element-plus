`useTemplateRefsList` 便于 v-for 时绑定refs 使用

### 使用方式

```html
<template>
  <div v-for="i of 5" :key="i" :ref="refsList.set">i</div>
</template>

<script setup lang="ts">
import { useTemplateRefsList } from '@mini-element-plus/hooks'

const refsList = useTemplateRefsList<HTMLDivElement>()
onUpdated(() => {
  refsList.value.length = 0
}),
</script>
```