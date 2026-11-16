<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
import { computed, ref } from "vue";
import type { TableColumnData } from "@cedar-design/ui-vue";

const copy = useDemoLocale("columnSizingPlayground");
const layout = ref<"fixed" | "auto">("fixed");
const fit = ref(true);
const grouped = ref(false);
const resizable = ref(false);
const narrow = ref(false);

const columns = computed<TableColumnData[]>(() => {
  const flat: TableColumnData[] = [
    {
      title: copy.value.labels.priority,
      dataIndex: "priority",
      width: 100,
      fixed: "left",
    },
    { title: copy.value.labels.name, dataIndex: "name", minWidth: 200 },
    { title: copy.value.labels.owner, dataIndex: "owner", minWidth: 120 },
    {
      title: copy.value.labels.status,
      dataIndex: "status",
      width: 100,
      fixed: "right",
    },
  ];
  return grouped.value
    ? [
        { title: copy.value.labels.task, children: flat.slice(0, 2) },
        { title: copy.value.labels.people, children: flat.slice(2) },
      ]
    : flat;
});
const data = computed(() => [
  {
    key: "1",
    priority: "P0",
    name: copy.value.inspectionTask,
    owner: "Alex",
    status: copy.value.active,
  },
  {
    key: "2",
    priority: "P1",
    name: copy.value.longTask,
    owner: "Lee",
    status: copy.value.done,
  },
]);
</script>

<template>
  <div class="column-sizing-playground">
    <c-space wrap>
      <c-radio-group v-model="layout" type="button" aria-label="table-layout">
        <c-radio value="fixed">fixed</c-radio>
        <c-radio value="auto">auto</c-radio>
      </c-radio-group>
      <c-checkbox v-model="fit">fit：{{ copy.labels.fit }}</c-checkbox>
      <c-checkbox v-model="grouped">{{ copy.labels.grouped }}</c-checkbox>
      <c-checkbox v-model="resizable">{{ copy.labels.resizable }}</c-checkbox>
      <c-checkbox v-model="narrow">{{ copy.labels.narrow }}</c-checkbox>
    </c-space>
    <p>{{ copy.labels.hint }}</p>
    <p v-if="resizable" role="status">
      {{ layout === "fixed" ? copy.labels.drag : copy.labels.auto }}
    </p>
    <c-table
      :columns="columns"
      :data="data"
      :pagination="false"
      :style="{ width: narrow ? '420px' : '100%' }"
      :table-layout="layout"
      :fit="fit"
      :column-resizable="resizable"
      :bordered="{ cell: true }"
    />
  </div>
</template>

<style scoped>
.column-sizing-playground {
  width: 760px;
  max-width: 100%;
}
p {
  margin: 12px 0;
}
</style>
