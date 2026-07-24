<template>
  <div style="margin-bottom: 16px">
    <c-switch v-model="scrollbar" />
    Virtual Scrollbar
  </div>
  <p style="margin-bottom: 8px">固定高度 <code>height</code>：表头固定，表体纵向滚动。</p>
  <c-table :columns="columns" :data="data" :height="200" :pagination="false" :scrollbar="scrollbar" />
  <br />
  <p style="margin-bottom: 8px">百分比高度：外层定高，表格 <code>height="100%"</code> 填满。</p>
  <div style="height: 220px">
    <c-table :columns="columns" :data="data" height="100%" :pagination="false" :scrollbar="scrollbar" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const scrollbar = ref(true)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 140,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    minWidth: 120,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 200,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    minWidth: 180,
  },
]

const data = reactive(
  Array.from({ length: 8 }, (_, index) => ({
    key: String(index + 1),
    name: `User ${index + 1}`,
    salary: 17000 + index * 1000,
    address: `${30 + index} Park Road, London`,
    email: `user.${index + 1}@example.com`,
  })),
)
</script>
