<template>
  <c-space direction="column">
    <c-input v-model="query" placeholder="搜索节点" clearable />
    <c-tree :data="nodes" :search-value="query" />
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const nodes = [
  { value: 'projects', label: '项目', children: [
    { value: 'design', label: '设计评审' },
    { value: 'release', label: '发布计划' },
  ] },
  { value: 'team', label: '团队', children: [
    { value: 'support', label: '客户支持' },
  ] },
]
</script>
