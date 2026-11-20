<template>
  <div ref="host" class="table-capability-demo">
    <div class="table-capability-demo__actions">
      <button
        type="button"
        data-table-action="layout"
        @click="mode = mode === 'fixed' ? 'auto' : 'fixed'"
      >
        切换列宽布局
      </button>
      <button
        type="button"
        data-table-action="page"
        @click="page = page === 1 ? 2 : 1"
      >
        切换当前页
      </button>
      <button
        type="button"
        data-table-action="direction"
        @click="toggleDirection"
      >
        切换阅读方向
      </button>
      <button
        type="button"
        data-table-action="data"
        @click="changed = !changed"
      >
        替换数据
      </button>
    </div>
    <section data-table-case="core">
      <h4>轻量基础表格</h4>
      <TableCore
        :columns="columns"
        :data="rows"
        :height="180"
        :table-layout="mode"
        :dir="direction"
        aria-label="轻量基础表格"
      />
    </section>
    <section data-table-case="paged">
      <h4>当前页汇总</h4>
      <c-table
        :columns="columns"
        :data="rows"
        :summary="summary"
        :height="180"
        :dir="direction"
        :sticky-pagination="false"
        :pagination="{ modelValue: page, pageSize: 5, responsive: false }"
        @page-change="page = $event"
      />
    </section>
    <section data-table-case="virtual">
      <h4>虚拟列表与汇总</h4>
      <c-table
        :columns="columns"
        :data="rows"
        :summary="summary"
        :dir="direction"
        :pagination="false"
        :virtual-list-props="{ height: 180, estimatedSize: 35, buffer: 0 }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TableCore from "../core";
import "../core/style";
import type { TableData } from "../types";

const copy = {
  group: "基本信息",
  name: "名称",
  amount: "数量",
  note: "备注",
  changed: "已更新的行",
  total: "合计"
};
const host = ref<HTMLElement>();
const mode = ref<"fixed" | "auto">("fixed");
const direction = ref<"ltr" | "rtl">();
const page = ref(1);
const changed = ref(false);
const columns = computed(() => [
  {
    title: copy.group,
    children: [
      {
        title: copy.name,
        dataIndex: "name",
        width: 140,
        minWidth: 140,
        fixed: "left" as const,
      },
      {
        title: copy.amount,
        dataIndex: "amount",
        width: 220,
        minWidth: 220,
      },
    ],
  },
  { title: copy.note, dataIndex: "note", width: 240, minWidth: 240 },
]);
const rows = computed(() =>
  changed.value
    ? [
        {
          key: "changed",
          name: copy.changed,
          amount: 7,
          note: copy.note,
        },
      ]
    : Array.from({ length: 100 }, (_, index) => ({
        key: String(index),
        name: `Cedar ${index}`,
        amount: index,
        note: `${copy.note} ${index}`,
      })),
);
const summary = ({ data }: { data: TableData[] }) => [
  {
    key: "total",
    name: copy.total,
    amount: data.reduce((sum, row) => sum + row.amount, 0),
    note: copy.note,
  },
];
const toggleDirection = () => {
  const current =
    direction.value ??
    (host.value ? getComputedStyle(host.value).direction : "ltr");
  direction.value = current === "rtl" ? "ltr" : "rtl";
};
</script>

<style scoped>
.table-capability-demo {
  display: grid;
  gap: 16px;
}
.table-capability-demo__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.table-capability-demo section {
  width: 360px;
  max-width: 100%;
  min-width: 0;
}
</style>
