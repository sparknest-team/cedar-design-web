<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string | number | (string | number)[]>()
const options = [
  { value: 'frontend', label: '前端', children: [{ value: 'vue', label: 'Vue', isLeaf: true }, { value: 'react', label: 'React', isLeaf: true }] },
  { value: 'backend', label: '后端', children: [{ value: 'node', label: 'Node.js', isLeaf: true }] },
  { value: 'lazy', label: '异步节点', isLeaf: false },
]
function loadMore(option, done) {
  done([{ value: `${option.value}-child`, label: '异步子节点', isLeaf: true }])
}
</script>
<template>
  <c-cascader-panel v-model="value" :options="options" :load-more="loadMore" />
  <c-tag>{{ JSON.stringify(value) }}</c-tag>
</template>
