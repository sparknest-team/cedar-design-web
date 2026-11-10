<script setup lang="ts">
import { computed, ref } from 'vue'
import Table from '../../index'
const props = defineProps<{ mode: 'sort' | 'filter'; split?: boolean }>()
const show = ref(true)
const data = [{ key: 'a', score: 1, kind: 'x' }, { key: 'b', score: 3, kind: 'y' }, { key: 'c', score: 2, kind: 'x' }]
const columns = computed(() => props.mode === 'sort'
  ? [{ title: 'Score', dataIndex: 'score', sortable: { defaultSortOrder: 'ascend' as const, sorter: (a: typeof data[number], b: typeof data[number]) => b.score - a.score } }]
  : [{ title: 'Kind', dataIndex: 'kind', filterable: { defaultFilteredValue: ['x'], filter: (values: string[], row: typeof data[number]) => values.includes(row.kind) } }])
</script>
<template>
  <main style="width: 500px">
    <button id="toggle" @click="show = !show">Toggle</button>
    <Table :columns="columns" :data="data" :height="split ? 200 : undefined" :pagination="false" :extra-column="show ? { dataIndex: mode === 'sort' ? 'score' : 'kind' } : false">
      <template #extra-column-header><span>Settings</span></template>
      <template #extra-column-cell><span data-probe>Extra</span></template>
    </Table>
  </main>
</template>
