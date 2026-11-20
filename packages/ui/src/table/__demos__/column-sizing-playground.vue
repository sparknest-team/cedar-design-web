<script setup lang="ts">
import { computed, ref } from "vue";
import type { TableColumnData } from "@cedar-design/ui-vue";

const copy = {
  labels: {
    fit: "剩余空间优先给弹性列",
    grouped: "分组表头",
    resizable: "拖拽调宽",
    narrow: "窄容器",
    priority: "优先级",
    name: "任务",
    owner: "负责人",
    status: "状态",
    task: "任务信息",
    people: "人员与状态",
    hint: "fixed 使用计算列宽；auto 允许内容影响列宽。拖拽调宽仅 fixed 可用。关闭 fit 后仍铺满容器，但剩余空间改为所有普通数据列按比例分摊。",
    drag: "拖动列边界可调整列宽。",
    auto: "auto 模式下不显示拖拽把手。"
  },
  inspectionTask: "充电设备巡检",
  active: "进行中",
  longTask: "较长的巡检任务名称，用于观察 auto 布局如何根据内容分配宽度",
  done: "已完成"
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
      <c-checkbox v-model="fit">fit：剩余空间优先给弹性列</c-checkbox>
      <c-checkbox v-model="grouped">分组表头</c-checkbox>
      <c-checkbox v-model="resizable">拖拽调宽</c-checkbox>
      <c-checkbox v-model="narrow">窄容器</c-checkbox>
    </c-space>
    <p>fixed 使用计算列宽；auto 允许内容影响列宽。拖拽调宽仅 fixed 可用。关闭 fit 后仍铺满容器，但剩余空间改为所有普通数据列按比例分摊。</p>
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
