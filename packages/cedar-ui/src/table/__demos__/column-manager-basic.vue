<template>
  <c-space wrap justify="flex-end" style="margin-bottom: 8px">
    <c-link @click="visible = true">列管理</c-link>
  </c-space>

  <c-table
    v-model:columns="columns"
    :data="data"
    :pagination="false"
    size="xs"
  />

  <c-drawer
    v-model:open="visible"
    title="列管理"
    :width="720"
    unmount-on-close
    @confirm="handleConfirm"
  >
    <div style="height: calc(100vh - 120px)">
      <c-table-column-manager
        ref="mgrRef"
        v-model="items"
        :columns="columns"
        :options="columnDefinitions"
      />
    </div>
  </c-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { stateFromColumns } from "@cedar-design/ui";
import type {
  ColumnDefinitions,
  TableColumnData,
  TableColumnManagerInstance,
} from "@cedar-design/ui";

const visible = ref(false);
const mgrRef = ref<TableColumnManagerInstance>();
const items = ref([]);

const columns = ref<TableColumnData[]>([
  { dataIndex: "name", title: "姓名", width: 120 },
  { dataIndex: "salary", title: "薪资", width: 100 },
  { dataIndex: "address", title: "地址", width: 180 },
]);

const columnDefinitions: ColumnDefinitions = [
  {
    title: "基础",
    key: "basic",
    children: [
      { dataIndex: "name", title: "姓名", required: true },
      { dataIndex: "salary", title: "薪资" },
      { dataIndex: "email", title: "邮箱" },
      { dataIndex: "address", title: "地址" },
    ],
  },
];

watch(visible, (val) => {
  if (!val) return;
  const state = stateFromColumns(columns.value, columnDefinitions);
  items.value = state.items;
});

const handleConfirm = () => {
  const result = mgrRef.value?.getResult?.();
  if (result) columns.value = result.columns;
  visible.value = false;
};

const data = ref([
  { name: "Jane", salary: 23000, address: "London", email: "jane@example.com" },
  {
    name: "Alisa",
    salary: 25000,
    address: "Paris",
    email: "alisa@example.com",
  },
]);
</script>
