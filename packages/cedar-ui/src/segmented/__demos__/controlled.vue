<template>
  <c-space direction="vertical">
    <c-segmented :model-value="value" :options="options" @change="onChange" />
    <div>当前值：{{ value }}</div>
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('a')
const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c', disabled: true },
]

const onChange = (next) => {
  value.value = next
}
</script>
