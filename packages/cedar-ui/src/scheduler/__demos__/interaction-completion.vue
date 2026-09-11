<template>
  <c-space direction="column" block>
    <c-alert
      >周视图空白处拖选创建，支持向上拖选；网格 60 分钟，指针吸附 15
      分钟，单击新建默认 45 分钟。月视图每天先显示 2
      条，可点击“更多日程”。</c-alert
    >
    <c-space
      ><c-button @click="mode = 'week'">拖选排期</c-button
      ><c-button @click="mode = 'month'">查看月历更多日程</c-button></c-space
    >
    <c-scheduler
      v-model="events"
      v-model:mode="mode"
      default-date="2026-09-22"
      :slot-duration="60"
      :snap-duration="15"
      :default-duration="45"
      :month-event-limit="2"
      drag-to-create
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerMode } from "../core";
const mode = ref<SchedulerMode>("week");
const events = ref<SchedulerEvent[]>(
  Array.from({ length: 5 }, (_, i) => ({
    id: `sample${i}`,
    title: `任务 ${i + 1}`,
    start: `2026-09-22T${String(i + 9).padStart(2, "0")}:00:00`,
    end: `2026-09-22T${String(i + 10).padStart(2, "0")}:00:00`,
  })),
);
</script>
