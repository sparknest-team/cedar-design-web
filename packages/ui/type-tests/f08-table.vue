<script setup lang="ts">
import { computed, ref } from 'vue'
import { Table as CTable, defineTableConfig } from '@cedar-design/ui-vue'
interface User { id: string; name: string; age: number }
const rows = ref<User[]>([{ id: 'a', name: 'Alice', age: 20 }])
const config = computed(() => defineTableConfig<User>({ rowKey: 'id', data: rows.value,
  columns: [{ dataIndex: 'name', render: ({ record }) => record.name.toUpperCase() }, { dataIndex: 'age' }],
}))
</script>
<template><CTable v-bind="config" /></template>
