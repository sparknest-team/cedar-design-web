<template>
  <p style="margin-bottom: 8px">
    <code>max-height</code> 场景下会强制 <code>table-layout: fixed</code>（与 Element 一致）。内容少时表格收缩，超出后表体滚动；可点按钮增减行观察。
  </p>
  <c-table :columns="columns" :data="data" :max-height="250" :pagination="false" />
  <c-button style="margin-top: 12px; width: 100%" @click="onAddItem">Add Item</c-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: 'State',
    dataIndex: 'state',
    width: 120,
  },
  {
    title: 'City',
    dataIndex: 'city',
    width: 120,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 600,
  },
  {
    title: 'Zip',
    dataIndex: 'zip',
    width: 120,
  },
  {
    title: 'Operations',
    dataIndex: 'operations',
    fixed: 'right',
    minWidth: 120,
  },
]

let seed = 3
const data = ref([
  {
    key: '1',
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    operations: 'Remove',
  },
  {
    key: '2',
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    operations: 'Remove',
  },
  {
    key: '3',
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    operations: 'Remove',
  },
])

const onAddItem = () => {
  seed += 1
  data.value.push({
    key: String(seed),
    date: `2016-05-${String(seed).padStart(2, '0')}`,
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    operations: 'Remove',
  })
}
</script>
