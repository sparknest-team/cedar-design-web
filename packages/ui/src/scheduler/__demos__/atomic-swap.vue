<template>
  <c-space direction="column" block>
    <c-alert
      >会议室禁止重叠。两条日程可以通过一次事务交换时间；整体校验最终结果，任一项失败都不会改变另一项。</c-alert
    >
    <c-button @click="swap">交换两个会议的时间</c-button>
    <c-scheduler
      ref="scheduler"
      v-model="events"
      default-date="2026-09-09"
      default-mode="resource-day"
      :resources="[{ id: 'room', label: '会议室 A' }]"
      :allow-overlap="false"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent } from "../core";
import type { SchedulerInstance } from "../index";
const scheduler = ref<SchedulerInstance>();
const events = ref<SchedulerEvent[]>([
  {
    id: "a",
    title: "产品评审",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
    resourceIds: ["room"],
  },
  {
    id: "b",
    title: "技术评审",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T11:00:00",
    resourceIds: ["room"],
  },
]);
async function swap() {
  const [a, b] = events.value;
  await scheduler.value?.transaction([
    { type: "move", event: { ...a, start: b.start, end: b.end } },
    { type: "move", event: { ...b, start: a.start, end: a.end } },
  ]);
}
</script>
