<script setup lang="ts">
import { ref } from 'vue'
import type { TreeNodeData } from '@cedar-design/ui-vue'

const value = ref<string[]>(['design'])
const data: TreeNodeData[] = [
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
<template>
  <c-space direction="column" fill>
    <c-tree-select v-model="value" :data="data" :tree-props="{ defaultExpandAll: true }" multiple tree-checkable tree-checked-strategy="child" clearable placeholder="选择多个部门" />
    <p role="status">已选部门：{{ value.join(', ') || '未选择' }}</p>
    <c-tree-select v-model="value" :data="data" multiple tree-checkable read-pretty />
  </c-space>
</template>
