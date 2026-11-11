<template>
  <c-table :columns="columns" :data="data" :height="200" :expandable="expandable" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: 'left',
    width: 140,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    minWidth: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 400,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    fixed: 'right',
    width: 200,
  },
]

const expandable = {
  title: 'Expand',
  width: 80,
}

const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    expand: 'Expand Content',
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
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
])
</script>
