<script setup lang="ts">
import { ref } from 'vue'

const value = ref([1, 2])
const options = [
  { value: 1, label: '设备' },
  { value: 2, label: '设备' },
  { value: 3, label: '备用设备' },
]
</script>

<template>
  <c-space direction="column">
    <c-select v-model="value" multiple filterable clearable :options="options" placeholder="选择设备" />
    <span>已选 ID：{{ value.join(', ') || '无' }}</span>
  </c-space>
</template>
