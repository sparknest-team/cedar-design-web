<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("tableColumnReviewInline");

const data = [
  { key: "1", name: "Ada", score: 92 },
  { key: "2", name: "Lin", score: 85 },
  { key: "3", name: "Grace", score: 97 },
];
const sortable = {
  sortDirections: ["ascend", "descend"],
  sorter: (a, b, { direction }) =>
    (a.score - b.score) * (direction === "descend" ? -1 : 1),
};
const filterable = {
  filters: [
    { text: "Ada", value: "Ada" },
    { text: "Lin", value: "Lin" },
  ],
  filter: (values, record) => values.includes(record.name),
};
</script>
<template>
  <c-table :data="data">
    <template #columns>
      <c-table-column
        :title="inlineCopy.name"
        data-index="name"
        :filterable="filterable"
        :sortable="sortable"
      >
        <template #cell="{ record, rowIndex }"
          ><c-tag>{{ rowIndex + 1 }} · {{ record.name }}</c-tag></template
        >
      </c-table-column>
      <c-table-column :title="inlineCopy.score" data-index="score" />
    </template>
  </c-table>
</template>
