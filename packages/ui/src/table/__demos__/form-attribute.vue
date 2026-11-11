<template>
  <c-form layout="inline" :model="form">
    <c-form-item label="Border" field="border">
      <c-switch v-model="form.border" />
    </c-form-item>
    <c-form-item label="Hover" field="hover">
      <c-switch v-model="form.hover" />
    </c-form-item>
    <c-form-item label="stripe" field="stripe">
      <c-switch v-model="form.stripe" />
    </c-form-item>
    <c-form-item label="checkbox" field="checkbox">
      <c-switch v-model="form.checkbox" />
    </c-form-item>
    <c-form-item label="checkAll" field="checkAll">
      <c-switch v-model="rowSelection.showCheckedAll" />
    </c-form-item>
    <c-form-item label="loading" field="loading">
      <c-switch v-model="form.loading" />
    </c-form-item>
    <c-form-item label="tableHeader" field="tableHeader">
      <c-switch v-model="form.tableHeader" />
    </c-form-item>
    <c-form-item label="noData" field="noData">
      <c-switch v-model="form.noData" />
    </c-form-item>
  </c-form>
  <c-table
    :columns="columns"
    :data="form.noData ? [] : data"
    :bordered="form.border"
    :hoverable="form.hover"
    :stripe="form.stripe"
    :loading="form.loading"
    :show-header="form.tableHeader"
    :row-selection="form.checkbox ? rowSelection : undefined" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  border: true,
  borderCell: false,
  hover: true,
  stripe: false,
  checkbox: true,
  loading: false,
  tableHeader: true,
  noData: false,
})

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
})

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
