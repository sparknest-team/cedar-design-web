<script setup lang="ts">
import { ref } from 'vue'
import Table from '../../index'
import type { TableChangeExtra, TableData } from '../../types'
defineProps<{ split?: boolean }>()
const data = ref([{ key: 'a', name: 'Ada' }, { key: 'b', name: 'Bob' }])
const result = ref('')
const count = ref(1)
function onChange(rows: TableData[], extra: TableChangeExtra) {
  result.value = JSON.stringify({ action: extra.type, target: extra.dragTarget?.name, rows: rows.map(row => row.name) })
  data.value = rows as typeof data.value
}
</script>
<template>
  <main>
    <output id="result">{{ result }}</output>
    <Table :columns="[{ title: 'Name', dataIndex: 'name', slotName: 'probe' }]" :data="data" :height="split ? 200 : undefined" :pagination="false" :draggable="{ type: 'handle' }" @change="onChange">
      <template #probe="{ record }">
        <input v-for="n in [record.name]" :key="n" data-probe :data-key="record.key">
      </template>
    </Table>
  </main>
</template>
