<template>
  <c-space direction="column" block>
    <c-alert
      >同一业务任务有两个独立分配：北站小林 09:00–10:00、南站小陈
      13:00–15:00。它们共用
      taskId，各自拥有时间与占用量；修改一个分配不会移动另一个。</c-alert
    >
    <c-scheduler
      v-model="events"
      :resources="resources"
      :resource-dimensions="dimensions"
      :resource-group-dimensions="['station', 'person']"
      default-date="2026-09-22"
      default-mode="resource-timeline"
      default-scale="hour"
      show-assignment-details
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { createSchedulerTaskEvents } from "../core";
const dimensions = [
  { id: "station", label: "站" },
  { id: "person", label: "人" },
];
const resources = [
  { id: "north", label: "北站", dimensionId: "station" },
  { id: "south", label: "南站", dimensionId: "station" },
  { id: "lin", label: "小林", dimensionId: "person", capacity: 1 },
  { id: "chen", label: "小陈", dimensionId: "person", capacity: 1 },
];
const events = ref(
  createSchedulerTaskEvents({ id: "inspection", title: "联合巡检" }, [
    {
      id: "north-lin",
      start: "2026-09-22T09:00:00",
      end: "2026-09-22T10:00:00",
      resourceIds: ["north", "lin"],
      resourceDetails: { lin: { units: 1, role: "负责" } },
    },
    {
      id: "south-chen",
      start: "2026-09-22T13:00:00",
      end: "2026-09-22T15:00:00",
      resourceIds: ["south", "chen"],
      resourceDetails: { chen: { units: 0.5, role: "负责" } },
    },
  ]),
);
</script>
