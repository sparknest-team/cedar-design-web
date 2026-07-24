<template>
  <div style="margin-bottom: 12px">
    <c-radio-group v-model="tableLayout" type="button">
      <c-radio value="fixed">fixed</c-radio>
      <c-radio value="auto">auto</c-radio>
    </c-radio-group>
  </div>
  <p style="margin-bottom: 8px; color: var(--color-text-3); font-size: 13px">
    默认 <code>fixed</code>：列宽由计算决定，长文本不会撑开列。切换到 <code>auto</code> 后，列宽会随单元格内容变化。
  </p>
  <c-table :columns="columns" :data="data" :table-layout="tableLayout" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const tableLayout = ref<'fixed' | 'auto'>('fixed')

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = reactive([
  {
    key: '1',
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    key: '2',
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles — a much longer address to compare fixed vs auto layout',
  },
  {
    key: '3',
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    key: '4',
    date: '2016-05-01',
    name: 'Tom',
    address: 'Short',
  },
])
</script>
