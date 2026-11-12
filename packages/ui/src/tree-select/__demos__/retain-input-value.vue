<script setup lang="ts">
import { ref } from 'vue'
const cleared = ref<string[]>([])
const retained = ref<string[]>([])
const clearQuery = ref('')
const retainedQuery = ref('')
const data = [{ value: 'alice', label: 'Alice' }, { value: 'alan', label: 'Alan' }, { value: 'bob', label: 'Bob' }]
</script>
<template>
  <c-space direction="column">
    <p>输入 Al 后选择 Alice：两个字段都会选中 Alice，区别是是否保留搜索词。</p>
    <c-tree-select v-model="cleared" v-model:input-value="clearQuery" :data="data" filterable multiple placeholder="选择后清空搜索词" />
    <output>已选： {{ cleared }}；搜索词： {{ JSON.stringify(clearQuery) }}</output>
    <c-tree-select v-model="retained" v-model:input-value="retainedQuery" :data="data" filterable multiple retain-input-value placeholder="选择后保留搜索词" />
    <output>已选： {{ retained }}；搜索词： {{ JSON.stringify(retainedQuery) }}</output>
  </c-space>
</template>
