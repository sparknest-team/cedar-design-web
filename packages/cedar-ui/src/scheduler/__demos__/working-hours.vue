<template>
  <c-space direction="column" block>
    <c-alert
      >会议室工作日 09:00–12:00、13:00–18:00
      可预约。灰色时段包含午休和非工作时间；新建、拖动和编辑均会校验完整时长。</c-alert
    >
    <c-scheduler
      v-model="events"
      default-date="2026-09-09"
      default-mode="resource-day"
      resource-label="会议室"
      :resources="rooms"
      :working-hours="hours"
      :allow-overlap="false"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerWorkingHours } from "../core";
const rooms = [
  { id: "room-a", label: "会议室 A" },
  { id: "room-b", label: "会议室 B" },
];
const hours: SchedulerWorkingHours[] = [
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 720 },
  { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 780, endMinute: 1080 },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "meeting",
    title: "产品评审",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T11:00:00",
    resourceIds: ["room-a"],
  },
]);
</script>
