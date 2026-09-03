<template>
  <div style="display: flex; justify-content: flex-end; margin-bottom: 8px">
    <c-link @click="visible = true">列管理</c-link>
  </div>

  <c-table v-model:columns="columns" :data="data" :pagination="false" size="xs" />

  <c-drawer v-model:open="visible" title="列管理" :width="720" unmount-on-close @confirm="handleConfirm">
    <div style="height: calc(100vh - 120px)">
      <c-table-column-manager ref="mgrRef" v-model="items" :columns="columns" :load-options="loadOptions" />
    </div>
  </c-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { stateFromColumns } from '@cedarjs/ui'
import type { ColumnDefinitions, TableColumnData, TableColumnManagerInstance } from '@cedarjs/ui'

const visible = ref(false)
const mgrRef = ref<TableColumnManagerInstance>()
const items = ref([])

const columns = ref<TableColumnData[]>([
  { dataIndex: 'name', title: '姓名', width: 120 },
  { dataIndex: 'salary', title: '薪资', width: 100 },
])

const loadOptions = async (): Promise<ColumnDefinitions> => {
  await new Promise((r) => setTimeout(r, 400))
  return [
    {
      title: '基础',
      key: 'basic',
      children: [
        { dataIndex: 'name', title: '姓名', required: true },
        { dataIndex: 'salary', title: '薪资' },
        { dataIndex: 'email', title: '邮箱' },
        { dataIndex: 'address', title: '地址' },
      ],
    },
  ]
}

watch(visible, async (val) => {
  if (!val) return
  const columnDefinitions = await loadOptions()
  const state = stateFromColumns(columns.value, columnDefinitions)
  items.value = state.items
})

const handleConfirm = () => {
  const result = mgrRef.value?.getResult?.()
  if (result) columns.value = result.columns
  visible.value = false
}

const data = ref([{ name: 'Jane', salary: 23000, address: 'London', email: 'jane@example.com' }])
</script>
