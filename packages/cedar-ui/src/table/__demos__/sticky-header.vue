<template>
  <p style="margin-bottom: 8px; color: var(--color-text-3); font-size: 13px">
    <code>sticky-header</code> 相对页面/外层滚动容器吸顶。传数字可指定距顶部偏移，例如导航高度
    <code>60</code> → <code>top: 60px</code>。请滚动文档页查看效果。
  </p>
  <c-table :columns="columns" :data="data" :sticky-header="60" :pagination="false" />
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
  Array.from({ length: 40 }, (_, index) => ({
    key: String(index + 1),
    name: `User ${index + 1}`,
    salary: 17000 + index * 500,
    address: `${30 + (index % 20)} Park Road, London`,
    email: `user.${index + 1}@example.com`,
  })),
)
</script>
