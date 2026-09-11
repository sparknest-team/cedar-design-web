<template>
  <c-space direction="column" block>
    <c-alert
      >每周一纽约时间 09:00，跨越夏令时切换后 UTC 时间会变化。RRULE
      由独立适配器解析，结果保留真实时间点；议程卡片同时展示所选时区时间。</c-alert
    >
    <c-space
      ><c-button @click="zone = 'America/New_York'">纽约时间</c-button
      ><c-button @click="zone = 'Asia/Shanghai'">上海时间</c-button
      ><c-tag>{{ zone }}</c-tag></c-space
    >
    <c-scheduler
      :model-value="events"
      default-date="2026-03-09"
      default-mode="agenda"
      readonly
    >
      <template #event="{ event }"
        >{{ event.title }} ·
        {{ formatSchedulerZonedDate(event.start, zone) }}</template
      >
    </c-scheduler>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { expandSchedulerRRule, formatSchedulerZonedDate } from "../adapters";
const zone = ref("America/New_York");
const events = expandSchedulerRRule(
  {
    event: {
      id: "ny",
      title: "纽约例会",
      start: "2026-03-02T14:00:00Z",
      end: "2026-03-02T15:00:00Z",
    },
    timeZone: "America/New_York",
    rule: "FREQ=WEEKLY;BYDAY=MO;COUNT=4",
  },
  { start: new Date("2026-03-01"), end: new Date("2026-04-01") },
);
</script>
