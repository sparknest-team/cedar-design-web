<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
defineProps<{ split?: boolean }>()
const dir = ref<'ltr' | 'rtl'>('ltr')
const columns = [{ title: 'Name', dataIndex: 'name', fixed: 'right' as const }, { title: 'Status', dataIndex: 'status', fixed: 'right' as const }]
const data = [{ key: 'a', name: 'Ada', status: 'Ready' }]
</script>
<template>
  <main style="width: 500px">
    <button id="toggle" @click="dir = dir === 'ltr' ? 'rtl' : 'ltr'">Toggle</button>
    <Table :dir="dir" :columns="columns" :data="data" :height="split ? 200 : undefined" :pagination="false" :extra-column="{ dataIndex: 'status' }" table-layout="auto">
      <template #extra-column-header><span>Settings</span></template>
      <template #extra-column-cell><input data-probe></template>
    </Table>
  </main>
</template>
