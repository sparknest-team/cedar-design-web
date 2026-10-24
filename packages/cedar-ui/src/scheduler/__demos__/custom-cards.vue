<template>
  <c-scheduler
    v-model="events"
    default-date="2026-09-09"
    :resources="resources"
  >
    <template #sidebar-extra="{ startDrag, cancelDrag, disabled }">
      <strong>自定义卡片</strong>
      <p>拖到右侧日期或时间格，确认后新增。卡片可重复使用。</p>
      <c-button
        v-for="card in cards"
        :key="card.title"
        class="scheduler-template-card"
        :disabled="disabled"
        :draggable="!disabled"
        @dragstart="startDrag(card, $event)"
        @dragend="cancelDrag"
      >
        <strong>{{ card.title }}</strong>
        <span>{{ card.description }} · {{ card.duration }} 分钟</span>
      </c-button>
    </template>
  </c-scheduler>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerEventTemplate } from "@cedar-design/ui";
import { resources } from "./data";
const events = ref<SchedulerEvent[]>([]);
const cards: SchedulerEventTemplate[] = [
  {
    title: "需求评审",
    description: "确认目标和验收标准",
    duration: 60,
    metadata: { taskId: "review" },
  },
  {
    title: "客户沟通",
    description: "记录反馈与后续安排",
    duration: 30,
    metadata: { taskId: "call" },
  },
  {
    title: "专注工作",
    description: "预留不被打扰的时段",
    duration: 90,
    metadata: { taskId: "focus" },
  },
];
</script>
<style scoped>
.scheduler-template-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  text-align: left;
  border: 1px solid var(--c-color-border);
  border-radius: 8px;
  color: var(--c-color-text-1);
  background: var(--c-color-bg-2);
  cursor: grab;
}
.scheduler-template-card:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.scheduler-template-card span {
  color: var(--c-color-text-2);
}
</style>
