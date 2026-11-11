<script setup lang="ts">
import { ref } from 'vue'
const cleared = ref<string[]>([])
const retained = ref<string[]>([])
const clearQuery = ref('')
const retainedQuery = ref('')
const data = [{ key: 'alice', title: 'Alice' }, { key: 'alan', title: 'Alan' }, { key: 'bob', title: 'Bob' }]
</script>
<template>
  <c-space direction="column">
    <p>Type Al and select Alice. Both fields select Alice; only the remaining query text differs.</p>
    <c-tree-select v-model="cleared" v-model:input-value="clearQuery" :data="data" filterable multiple placeholder="Clear query after selecting" />
    <output>Selected: {{ cleared }}; query: {{ JSON.stringify(clearQuery) }}</output>
    <c-tree-select v-model="retained" v-model:input-value="retainedQuery" :data="data" filterable multiple retain-input-value placeholder="Keep query after selecting" />
    <output>Selected: {{ retained }}; query: {{ JSON.stringify(retainedQuery) }}</output>
  </c-space>
</template>
