---
title: Modal
lang: en-US
---

# Modal

Modal

## 基础用法

<dialogModal />

<script setup>
import dialogModal from '../../examples/dialog/show.vue'
</script>

### 源码使用方式
```vue
<template>
  <div @click="dialogModalShow = true" class="resetButton">
    show dialog modal
  </div>
  <dialog-modal v-model="dialogModalShow" ref="dialogModalRef" title="Tips" width="50%" :before-close="handleClose"
    @cancel="handleModalCancel" @confirm="handleModalConfirm" :has-cancel="true" :has-confirm="true"
    :cancel-text="'Cancel'" :confirm-text="'Ok'">
    <template #header>header tip text</template>
    <span>This is a message</span>
  </dialog-modal>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { dialogModal } from '@mini-element-plus/components/dialogModal'
const dialogModalShow = ref(false)
const dialogModalRef = ref()
const handleClose = (done: () => void) => {
  alert('dialog close')
  done()
}
const handleModalCancel = () => {
  alert('dialog cancel')
  dialogModalShow.value = false
}
const handleModalConfirm = () => {
  alert('dialog confirm')
  dialogModalShow.value = false
}
onMounted(() => {
  document.onkeydown = handleKeydown
})
onUnmounted(() => {
  document.onkeydown = null
})
const handleKeydown = (e: Event) => {
  console.log(e)
  if (e.key === 'ArrowRight') {
    e.action = 'Right'
  } else if (e.key === 'ArrowLeft') {
    e.action = 'Left'
  } else if (e.key === 'Enter') {
    e.action = 'Enter'
  } else if (e.key === 'Backspace') {
    e.action = 'Back'
  }
  dialogModalRef.value.KEYDOWN(e)
}
</script>
<style lang="scss" scoped>
.resetButton {
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  background: green;
  color: aqua;
  border: 1px solid aqua;
  z-index: 1
}
</style>
```

### md
---
title: Dialog
lang: en-US
---

# Dialog

Informs users while preserving the current page state.

## Basic usage

Dialog pops up a dialog box, and it's quite customizable.

::: Set `model-value / v-model` attribute with a `Boolean`, and Dialog shows when it is `true`. The Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`. The optional `title` attribute (empty by default) is for defining a title. Finally, this example demonstrates how `before-close` is used.

:::

:::tip

`before-close` only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the `footer` named slot, you can add what you would do with `before-close` in the buttons' click event handler.

:::

## Customized Content

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog.

## Customized Header

The `header` slot can be used to customize the area where the title is displayed. In order to maintain accessibility, use the `title` attribute in addition to using this slot, or use the `titleId` slot property to specify which element should be read out as the dialog title.

:::demo

dialog/customization-header

:::
## Centered content

Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

dialog/centered-content

:::

:::tip

The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.

:::

## Attributes

| Attribute             | Description                                                                                       | Type                                             | Accepted Values | Default |
| --------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------- | ------- |
| model-value / v-model | visibility of Dialog                                                                              | boolean                                          | —               | —       |
| title                 | title of Dialog. Can also be passed with a named slot (see the following table)                   | string                                           | —               | —       |
| width                 | width of Dialog                                                                                   | string / number                                  | —               | 50%     |
| top                   | value for `margin-top` of Dialog CSS                                                              | string                                           | —               | 15vh    |
| modal                 | whether a mask is displayed                                                                       | boolean                                          | —               | true    |
| custom-class          | custom class names for Dialog                                                                     | string                                           | —               | —       |
| close-on-click-modal  | whether the Dialog can be closed by clicking the mask                                             | boolean                                          | —               | true    |
| show-close            | whether to show a close button                                                                    | boolean                                          | —               | true    |
| before-close          | callback before Dialog closes, and it will prevent Dialog from closing                            | function(done)，done is used to close the Dialog | —               | —       |
| center                | whether to align the header and footer in center                                                  | boolean                                          | —               | false   |
| hasCancel                | whether dialog has cancel button                                                  | boolean                                          | —               | true   |
| hasConfirm                | whether dialog has confirm button                                                        | boolean                                          | —               | true   |
| cancelText                | set dialog cancel button css text                                                   | string                                          | —               | 'cancel_btn'   |
| confirmText                | set dialog confirm button css text                                                           | string                                          | —               | 'confirm_btn'   |
| defaultFocus                | set dialog default button focus                                                  | string                                          | —               | BUTTON_TYPE.CANCEL   |
| focusControl                | whether dialog need set focus                                                  | boolean                                          | —               | true   |


## Slots

| Name              | Description                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| —                 | content of Dialog                                                                                     |
| header            | content of the Dialog header; Replacing this removes the title, but does not remove the close button. |
| title | Works the same as the header slot. Use that instead.                                                  |
| footer            | content of the Dialog footer                                                                          |

## Events

| Event Name       | Description                                      | Parameters |
| ---------------- | ------------------------------------------------ | ---------- |
| open             | triggers when the Dialog opens                   | —          |
| close            | triggers when the Dialog closes                  | —          |
| cancel            | triggers when the Dialog cancel button pressed                  | —          |
| confirm            | triggers when the Dialog confirm button pressed                  | —          |