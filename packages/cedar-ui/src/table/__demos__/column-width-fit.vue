<template>
  <p style="margin-bottom: 8px">部分列设 <code>width</code>（固定），其余设 <code>min-width</code>（弹性）。总和小于容器时铺满，无横向滚动。</p>
  <c-table :columns="mixColumns" :data="data" :pagination="false" />
  <br />
  <p style="margin-bottom: 8px">全部使用 <code>min-width</code>：按比例分配剩余宽度。</p>
  <c-table :columns="flexColumns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const mixColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 180,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    minWidth: 160,
  },
]

const flexColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    minWidth: 100,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    minWidth: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 200,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    minWidth: 160,
  },
]

const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
])
</script>
