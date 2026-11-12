<template>
  <c-space direction="column">
    <c-tree-select v-model="value" :data="data" :tree-props="{ defaultExpandAll: true }" selectable="leaf" clearable placeholder="选择部门" />
    <p role="status">当前部门：{{ value || '未选择' }}</p>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string>()
const data = [
  { value: 'product', label: '产品中心', children: [
    { value: 'design', label: '设计部' },
    { value: 'engineering', label: '研发部' },
  ] },
  { value: 'operations', label: '运营中心', children: [
    { value: 'support', label: '客户服务部' },
    { value: 'locked', label: '归档部门（禁用）', disabled: true },
  ] },
]
</script>
