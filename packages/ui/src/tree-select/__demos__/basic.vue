<template>
  <c-space direction="column">
    <c-tree-select v-model="value" :data="data" selectable placeholder="选择部门" />
    <p role="status">当前部门：{{ value || '未选择' }}</p>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string>()
const data = [
  { value: 'design', label: '设计部' },
  { value: 'engineering', label: '研发部' },
]
</script>
