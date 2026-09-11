<template>
  <c-space direction="column" block>
    <c-alert
      >隐藏日期只影响展示，原日程仍保留，并参与容量和冲突校验。跨周末任务会出现在周五及下周一；拖动到周一会按周一的实际日期保存。可切换周、月和议程检查同一份数据。</c-alert
    >
    <c-space wrap>
      <c-checkbox v-model="weekends">隐藏周末</c-checkbox>
      <c-checkbox v-model="wednesday">隐藏周三</c-checkbox>
      <c-tag>完整数据：{{ events.length }} 条</c-tag>
    </c-space>
    <c-scheduler
      key="hidden-days"
      v-model="events"
      default-date="2026-09-18"
      default-mode="month"
      :modes="['week', 'month', 'agenda']"
      :hidden-days="hidden"
      :first-day-of-week="0"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { SchedulerEvent } from "../core";
const weekends = ref(true);
const wednesday = ref(false);
const hidden = computed(() => [
  ...(weekends.value ? [0, 6] : []),
  ...(wednesday.value ? [3] : []),
]);
const events = ref<SchedulerEvent[]>([
  {
    id: "cross-weekend",
    title: "跨周末项目",
    start: "2026-09-18",
    end: "2026-09-22",
    allDay: true,
  },
  {
    id: "weekend",
    title: "周末值班",
    start: "2026-09-19T10:00:00",
    end: "2026-09-19T11:00:00",
  },
  {
    id: "wednesday",
    title: "周三评审",
    start: "2026-09-16T14:00:00",
    end: "2026-09-16T15:00:00",
  },
]);
</script>
