<template>
  <p style="margin-bottom: 8px; color: var(--color-text-3); font-size: 13px">
    <code>sticky-pagination</code> 相对<strong>页面/外层滚动容器</strong>吸底。适合长列表翻页时分页条常驻视口底部；数字为距底部偏移（px）。
  </p>
  <c-table
    :columns="columns"
    :data="data"
    sticky-pagination
    :pagination="{ pageSize: 20 }"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

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
  Array.from({ length: 80 }, (_, index) => ({
    key: String(index + 1),
    name: `User ${index + 1}`,
    salary: 17000 + index * 500,
    address: `${30 + (index % 20)} Park Road, London`,
    email: `user.${index + 1}@example.com`,
  })),
)
</script>
