<template>
  <c-space direction="column" block>
    <c-alert
      >一条任务同时关联站和人。左侧同一维度可多选，站与人之间组合筛选；上方“展示维度”切换资源行。打开任务详情可分别修改站和人，其他维度的关联会保留。</c-alert
    >
    <c-space wrap>
      <c-button
        @click="
          filters = { station: ['station:north'], person: ['person:lin'] }
        "
        >北站 + 小林</c-button
      >
      <c-button
        @click="
          filters = {
            station: ['station:north', 'station:south'],
            person: ['person:chen'],
          }
        "
        >两站 + 小陈</c-button
      >
      <c-button @click="filters = {}">清空维度筛选</c-button>
      <c-button @click="axis = 'station'">按站展示</c-button>
      <c-button @click="axis = 'person'">按人展示</c-button>
      <c-tag>匹配 {{ matching.length }} / {{ events.length }} 条任务</c-tag>
    </c-space>
    <c-scheduler
      data-dimensions-demo
      key="resource-dimensions"
      v-model="events"
      v-model:resource-filters="filters"
      v-model:resource-dimension="axis"
      default-date="2026-09-22"
      default-mode="resource-timeline"
      default-scale="hour"
      :resources="resources"
      :resource-dimensions="dimensions"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { filterSchedulerEventsByResources } from "../core";
import type {
  SchedulerEvent,
  SchedulerResource,
  SchedulerResourceFilters,
} from "../core";
const dimensions = [
  { id: "station", label: "站" },
  { id: "person", label: "人" },
];
const resources: SchedulerResource[] = [
  { id: "station:north", label: "北站", dimensionId: "station", capacity: 2 },
  { id: "station:south", label: "南站", dimensionId: "station", capacity: 2 },
  { id: "person:lin", label: "小林", dimensionId: "person", capacity: 1 },
  { id: "person:chen", label: "小陈", dimensionId: "person", capacity: 1 },
];
const filters = ref<SchedulerResourceFilters>({
  station: ["station:north"],
  person: ["person:lin"],
});
const axis = ref("station");
const events = ref<SchedulerEvent[]>([
  {
    id: "north-lin",
    title: "北站巡检",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["station:north", "person:lin"],
  },
  {
    id: "north-chen",
    title: "北站检修",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T11:00:00",
    resourceIds: ["station:north", "person:chen"],
  },
  {
    id: "south-lin",
    title: "南站巡检",
    start: "2026-09-22T11:00:00",
    end: "2026-09-22T12:00:00",
    resourceIds: ["station:south", "person:lin"],
  },
  {
    id: "south-chen",
    title: "南站检修",
    start: "2026-09-22T13:00:00",
    end: "2026-09-22T14:00:00",
    resourceIds: ["station:south", "person:chen"],
  },
  {
    id: "joint",
    title: "北站联合验收",
    start: "2026-09-22T14:00:00",
    end: "2026-09-22T15:00:00",
    resourceIds: ["station:north", "person:lin", "person:chen"],
  },
]);
const matching = computed(() =>
  filterSchedulerEventsByResources(events.value, resources, filters.value),
);
</script>
