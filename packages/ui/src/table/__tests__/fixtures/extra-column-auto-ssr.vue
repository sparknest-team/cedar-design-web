<script setup lang="ts">
import Table from '../../index'
defineProps<{ split?: boolean }>()
const columns = [{ title: 'Name', dataIndex: 'name', fixed: 'right' as const }, { title: 'Status', dataIndex: 'status', fixed: 'right' as const }]
const data = [{ key: 'a', name: 'Ada', status: 'Ready' }]
</script>
<template>
  <main style="width: 500px">
    <Table :columns="columns" :data="data" :height="split ? 200 : undefined" :pagination="false" :extra-column="{ dataIndex: 'status' }" table-layout="auto">
      <template #extra-column-header><span>Settings</span></template>
      <template #extra-column-cell><span data-probe>Extra</span></template>
    </Table>
  </main>
</template>
