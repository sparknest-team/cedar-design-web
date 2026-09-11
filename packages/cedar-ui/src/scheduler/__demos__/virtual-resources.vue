<template>
  <c-space direction="column" block>
    <c-alert
      >100 个站 × 20 位人员，共 2000
      个组合行。滚动时只挂载附近的行；点击空白格新建，或在当前可见行之间拖动任务。编辑后保留滚动位置；拖到边缘可自动滚动到其他组合行。</c-alert
    >
    <c-space wrap>
      <c-button @click="filters = {}">全部 2000 行</c-button>
      <c-button @click="filters = { station: ['s0', 's1', 's2'] }"
        >前 3 个站</c-button
      >
      <c-button @click="filters = { person: ['p0'] }">仅人员 001</c-button>
      <c-tag>{{ events.length }} 条日程</c-tag>
    </c-space>
    <c-scheduler
      key="virtual-resources"
      data-virtual-resources-demo
      v-model="events"
      v-model:resource-filters="filters"
      :resources="resources"
      :resource-dimensions="dimensions"
      :resource-group-dimensions="['station', 'person']"
      :virtual-list-props="{ height: 480, buffer: 10, estimatedSize: 80 }"
      default-date="2026-09-22"
      default-mode="resource-timeline"
      default-scale="hour"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type {
  SchedulerResource,
  SchedulerEvent,
  SchedulerResourceFilters,
} from "../core";
const dimensions = [
  { id: "station", label: "站" },
  { id: "person", label: "人" },
];
const resources: SchedulerResource[] = [
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `s${i}`,
    label: `站点 ${String(i + 1).padStart(3, "0")}`,
    dimensionId: "station",
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `p${i}`,
    label: `人员 ${String(i + 1).padStart(3, "0")}`,
    dimensionId: "person",
  })),
];
const filters = ref<SchedulerResourceFilters>({});
const events = ref<SchedulerEvent[]>(
  Array.from({ length: 100 }, (_, i) => ({
    id: `task${i}`,
    title: `巡检 ${String(i + 1).padStart(3, "0")}`,
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: [`s${i}`, `p${i % 20}`],
  })),
);
</script>
