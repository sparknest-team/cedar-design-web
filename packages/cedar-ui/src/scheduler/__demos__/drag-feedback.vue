<template>
  <p>
    拖动日程主体查看虚影和目标预览；拖上边缘调整开始，拖下边缘调整结束。按
    Escape 取消，松手才提交。
  </p>
  <c-scheduler
    v-model="events"
    default-date="2026-09-09"
    default-mode="resource-day"
    :resources="resources"
    resource-label="工作台"
    :start-hour="8"
    :end-hour="16"
    :step="15"
    :show-sidebar="false"
    style="--c-scheduler-max-height: 560px"
  >
    <template #event="{ event }">
      <strong>{{ event.title }}</strong
      ><br />
      <span>{{ event.description }}</span>
    </template>
  </c-scheduler>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerResource } from "@cedarjs/ui";
const resources: SchedulerResource[] = [
  { id: "a", label: "工作台 A" },
  { id: "b", label: "工作台 B" },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "design",
    title: "方案制作",
    description: "自定义卡片内容也会出现在虚影中",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:30:00",
    resourceIds: ["a"],
  },
  {
    id: "review",
    title: "验收检查",
    description: "试着拖动上边缘或下边缘",
    start: "2026-09-09T11:00:00",
    end: "2026-09-09T12:00:00",
    resourceIds: ["b"],
  },
]);
</script>
