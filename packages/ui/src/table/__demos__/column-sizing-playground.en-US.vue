<script setup lang="ts">
import { computed, ref } from "vue";
import type { TableColumnData } from "@cedar-design/ui-vue";

const copy = {
  labels: {
    fit: "Distribute space to flexible columns",
    grouped: "Grouped headers",
    resizable: "Resize columns",
    narrow: "Narrow container",
    priority: "Priority",
    name: "Task",
    owner: "Owner",
    status: "Status",
    task: "Task information",
    people: "People and status",
    hint: "fixed uses computed column widths; auto lets cell content affect widths. Resizing is available only in fixed mode. Turning fit off still fills the container, but distributes space across all data columns.",
    drag: "Drag a column boundary to resize it.",
    auto: "auto mode hides resize handles."
  },
  inspectionTask: "Inspect charging equipment",
  active: "Active",
  longTask: "Compare a longer task name and observe how auto layout changes column widths",
  done: "Done"
};
const layout = ref<"fixed" | "auto">("fixed");
const fit = ref(true);
const grouped = ref(false);
const resizable = ref(false);
const narrow = ref(false);

const columns = computed<TableColumnData[]>(() => {
  const flat: TableColumnData[] = [
    {
      title: copy.labels.priority,
      dataIndex: "priority",
      width: 100,
      fixed: "left",
    },
    { title: copy.labels.name, dataIndex: "name", minWidth: 200 },
    { title: copy.labels.owner, dataIndex: "owner", minWidth: 120 },
    {
      title: copy.labels.status,
      dataIndex: "status",
      width: 100,
      fixed: "right",
    },
  ];
  return grouped.value
    ? [
        { title: copy.labels.task, children: flat.slice(0, 2) },
        { title: copy.labels.people, children: flat.slice(2) },
      ]
    : flat;
});
const data = computed(() => [
  {
    key: "1",
    priority: "P0",
    name: copy.inspectionTask,
    owner: "Alex",
    status: copy.active,
  },
  {
    key: "2",
    priority: "P1",
    name: copy.longTask,
    owner: "Lee",
    status: copy.done,
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
      <c-checkbox v-model="fit">fit：Distribute space to flexible columns</c-checkbox>
      <c-checkbox v-model="grouped">Grouped headers</c-checkbox>
      <c-checkbox v-model="resizable">Resize columns</c-checkbox>
      <c-checkbox v-model="narrow">Narrow container</c-checkbox>
    </c-space>
    <p>fixed uses computed column widths; auto lets cell content affect widths. Resizing is available only in fixed mode. Turning fit off still fills the container, but distributes space across all data columns.</p>
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
