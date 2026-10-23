<script setup lang="ts">
import type { TableColumnData } from "../index";
const columns: TableColumnData[] = [
  {
    title: "姓名",
    dataIndex: "name",
    sortable: { sortDirections: ["ascend", "descend"] },
  },
  { title: "年龄", dataIndex: "age" },
  { title: "城市", dataIndex: "city" },
];
const data = [
  { key: "1", name: "林夏", age: 28, city: "上海" },
  { key: "2", name: "周宁", age: 32, city: "杭州" },
  { key: "3", name: "陈晓", age: 25, city: "北京" },
];
</script>
<template>
  <c-table :columns="columns" :data="data" />
</template>
