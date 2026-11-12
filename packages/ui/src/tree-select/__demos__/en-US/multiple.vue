<script setup lang="ts">
import { ref } from 'vue'
import type { TreeNodeData } from '@cedar-design/ui-vue'

const value = ref<string[]>(['design'])
const data: TreeNodeData[] = [
  { value: 'product', label: 'Product', children: [
    { value: 'design', label: 'Design' },
    { value: 'engineering', label: 'Engineering' },
  ] },
  { value: 'operations', label: 'Operations', children: [
    { value: 'support', label: 'Support' },
    { value: 'locked', label: 'Archived department (disabled)', disabled: true },
  ] },
]
</script>
<template>
  <c-space direction="column" fill>
    <c-tree-select v-model="value" :data="data" :tree-props="{ defaultExpandAll: true }" multiple tree-checkable tree-checked-strategy="child" clearable placeholder="Select departments" />
    <p role="status">Selected departments: {{ value.join(', ') || 'None' }}</p>
    <c-tree-select v-model="value" :data="data" multiple tree-checkable read-pretty />
  </c-space>
</template>
