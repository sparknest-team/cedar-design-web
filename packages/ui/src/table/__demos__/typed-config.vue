<script setup lang="ts">
import { computed, ref } from 'vue'
import { defineTableConfig } from '@cedar-design/ui-vue'
interface User {
  id: string
  name: string
  age: number
  profile: { city: string }
}
const rows = ref<User[]>([
  { id: 'alice', name: 'Alice', age: 28, profile: { city: '杭州' } },
  { id: 'bob', name: 'Bob', age: 16, profile: { city: '宁波' } },
])
const config = computed(() => defineTableConfig<User>({
  rowKey: 'id',
  data: rows.value,
  pagination: false,
  columns: [
    { title: '姓名', dataIndex: 'name', render: ({ record }) => record.name.toUpperCase() },
    { title: '城市', dataIndex: 'profile.city' },
    { title: '年龄', dataIndex: 'age',
      sortable: { sortDirections: ['ascend', 'descend'], sorter: (a, b, { direction }) => (a.age - b.age) * (direction === 'descend' ? -1 : 1) },
      filterable: { filters: [{ text: '仅成年人', value: 'adult' }], filter: (values, record) => !values.length || !values.includes('adult') || record.age >= 18 },
    },
  ],
}))
function addRow() {
  if (rows.value.length < 3) rows.value = [...rows.value, { id: 'carol', name: 'Carol', age: 35, profile: { city: '上海' } }]
}
</script>
<template>
  <c-space direction="column" fill>
    <c-button :disabled="rows.length >= 3" @click="addRow">增加一行</c-button>
    <c-table v-bind="config" />
    <p role="status">业务数据：{{ rows.length }} 行；年龄列支持排序和筛选。</p>
  </c-space>
</template>
