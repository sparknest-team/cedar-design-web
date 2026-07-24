<template>
  <p style="margin-bottom: 8px">
    列最小宽之和大于容器宽度时自动出现横向滚动；弹性列停在 <code>min-width</code>，不再被压缩。
  </p>
  <c-table :columns="columns" :data="data" :pagination="false" />
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
    width: 120,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 480,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    minWidth: 360,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    minWidth: 280,
  },
]

const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    phone: '123-456-7891',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
    phone: '123-456-7892',
  },
])
</script>
