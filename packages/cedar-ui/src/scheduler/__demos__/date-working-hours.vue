<template>
  <c-space direction="column" block>
    <c-alert
      >模拟周六补班：公共时段 09:00–12:00；小林改为
      10:00–12:00、13:00–15:00；设备全天关闭。关闭开关后恢复周一至周五规则。已有任务保留，再次保存时重新校验。</c-alert
    >
    <c-checkbox v-model="enabled">启用指定日期时段</c-checkbox>
    <c-scheduler
      key="date-hours"
      v-model="events"
      default-date="2026-09-12"
      default-mode="resource-day"
      :resources="resources"
      :working-hours="hours"
      :date-working-hours="enabled ? overrides : []"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerDateWorkingHours, SchedulerEvent } from "../core";
const enabled = ref(true);
const resources = [
  { id: "lin", label: "小林" },
  { id: "chen", label: "小陈" },
  { id: "device", label: "设备" },
];
const hours = [
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 1080 },
];
const overrides: SchedulerDateWorkingHours[] = [
  { date: "2026-09-12", intervals: [{ startMinute: 540, endMinute: 720 }] },
  {
    date: "2026-09-12",
    resourceIds: ["lin"],
    intervals: [
      { startMinute: 600, endMinute: 720 },
      { startMinute: 780, endMinute: 900 },
    ],
  },
  { date: "2026-09-12", resourceIds: ["device"], intervals: [] },
  { date: "2026-09-30", intervals: [{ startMinute: 540, endMinute: 720 }] },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "makeup",
    title: "补班协作任务",
    start: "2026-09-12T10:00:00",
    end: "2026-09-12T11:00:00",
    resourceIds: ["lin", "chen"],
  },
]);
</script>
