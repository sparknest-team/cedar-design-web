<template>
  <c-space direction="column" block>
    <c-alert
      >重叠卡片按数量等分起点并延伸到最右侧。本例最多直接显示 3
      张，更多日程通过“还有 N
      项”Popover查看。Tab聚焦前置，失焦恢复；单击或Enter打开详情。</c-alert
    >
    <c-space>
      <c-button @click="layout = layout === 'stack' ? 'columns' : 'stack'">{{
        layout === "stack" ? "切换并排布局" : "切换叠放布局"
      }}</c-button>
      <c-checkbox v-model="readonly">只读查看</c-checkbox>
    </c-space>
    <c-scheduler
      v-model="events"
      default-date="2026-09-22"
      default-mode="week"
      :event-layout="layout"
      :overlap-event-limit="3"
      :readonly="readonly"
      selectable
      :show-sidebar="false"
      :start-hour="8"
      :end-hour="16"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent } from "../core";
const layout = ref<"stack" | "columns">("stack");
const readonly = ref(false);
const events = ref<SchedulerEvent[]>([
  {
    id: "a",
    title: "站点巡检",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T12:00:00",
  },
  {
    id: "b",
    title: "设备维护",
    start: "2026-09-22T09:30:00",
    end: "2026-09-22T11:30:00",
  },
  {
    id: "c",
    title: "人员培训",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T12:30:00",
  },
  {
    id: "e",
    title: "安全检查",
    start: "2026-09-22T09:15:00",
    end: "2026-09-22T11:00:00",
  },
  {
    id: "f",
    title: "临时工单",
    start: "2026-09-22T09:45:00",
    end: "2026-09-22T12:00:00",
  },
  {
    id: "d",
    title: "独立任务",
    start: "2026-09-23T13:00:00",
    end: "2026-09-23T14:00:00",
  },
]);
</script>
