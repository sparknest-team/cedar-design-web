<template>
  <c-space direction="column" block>
    <c-alert
      >设备 A 在 10:00–12:00 维护，设备 B
      不受影响。可关闭维护规则，对比可用时段及拖动保存结果。</c-alert
    >
    <c-checkbox v-model="maintenance">启用设备 A 维护时段</c-checkbox>
    <c-scheduler
      v-model="events"
      default-date="2026-09-09"
      default-mode="resource-timeline"
      default-scale="hour"
      resource-label="设备"
      :resources="equipment"
      :disabled-ranges="maintenance ? ranges : []"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerDisabledRange } from "../core";
const maintenance = ref(true);
const equipment = [
  { id: "a", label: "设备 A" },
  { id: "b", label: "设备 B" },
];
const ranges: SchedulerDisabledRange[] = [
  {
    id: "maintenance-a",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T12:00:00",
    resourceIds: ["a"],
    label: "设备 A 定期维护",
  },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "inspection",
    title: "样品检测",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
    resourceIds: ["a"],
  },
]);
</script>
