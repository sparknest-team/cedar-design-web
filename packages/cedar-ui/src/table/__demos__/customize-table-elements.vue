<template>
  <c-table :columns="columns" :data="data" row-class="common-row">
    <template #tr>
      <tr class="my-tr" @contextmenu.prevent="onContextMenu" />
    </template>
    <template #td>
      <td class="my-td" />
    </template>
  </c-table>
  <c-tag>行右键回调：{{ contextMenus }}</c-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const contextMenus = ref(0)
const onContextMenu = () => {
  contextMenus.value++
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]
const data = [
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
]
</script>
