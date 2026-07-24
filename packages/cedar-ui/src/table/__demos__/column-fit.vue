<template>
  <p style="margin-bottom: 8px">
    <code>fit</code> 默认 <code>true</code>：弹性列会吃掉剩余宽度铺满容器。设为 <code>false</code> 后列宽不再扩张，表格可窄于容器。
  </p>
  <div style="margin-bottom: 12px">
    <c-switch v-model="fit" />
    fit = {{ fit }}
  </div>
  <c-table :columns="columns" :data="data" :fit="fit" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const fit = ref(true)

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    minWidth: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    minWidth: 160,
  },
]

const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
  },
])
</script>
