<template>
  <div>
    <h1>macos demo</h1>
    <button @click="add">
		$refCount: {{ $refCount }}
		</button>
		$computedCount1: {{ $computedCount1 }}
		<div>
			defineProps: {{ newMsg }}
		</div>
		<div>
			defineProps: {{ msg }}
		</div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { $ref,$computed } from 'vue/macros'
const { msg:newMsg } = defineProps<{
	msg: string
}>()
let $refCount = $ref(0)
function add () {
  $refCount++
}
let $computedCount = $computed(() => {
	return $refCount+1
})
let $computedCount1 = $computed(() => {
	return $computedCount+1
})
</script>

<style scoped></style>
