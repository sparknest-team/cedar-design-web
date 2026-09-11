<template>
  <c-space direction="column" block>
    <c-alert
      >点击日程详情中的“复制日程”，或使用下方按钮。副本取自已保存数据，生成新编号，尚未保存的表单修改不会带入。保存前可调整时间和人员；取消不创建日程。会议室容量为
      2，可体验第三条同时预约被拦截。</c-alert
    >
    <c-space wrap>
      <c-button @click="scheduler?.duplicateEvent('review')"
        >复制评审会议</c-button
      >
      <c-button @click="scheduler?.duplicateEvent('all-day')"
        >复制全天任务</c-button
      >
      <c-button @click="scheduler?.duplicateEvent('backlog')"
        >复制未排期任务</c-button
      >
      <c-checkbox v-model="reject">模拟副本保存失败</c-checkbox>
      <c-tag>已保存 {{ events.length }} 条日程</c-tag>
    </c-space>
    <c-scheduler
      key="duplicate-events"
      ref="scheduler"
      v-model="events"
      default-date="2026-09-16"
      default-mode="week"
      :resources="resources"
      :before-transaction="persist"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerInstance } from "../index";
import type { SchedulerEvent } from "../core";
import type { SchedulerBeforeTransaction } from "../props";
const scheduler = ref<SchedulerInstance>();
const reject = ref(false);
const resources = [{ id: "room", label: "协作会议室", capacity: 2 }];
const events = ref<SchedulerEvent[]>([
  {
    id: "review",
    title: "设计方案评审",
    start: "2026-09-16T10:00:00",
    end: "2026-09-16T11:00:00",
    resourceIds: ["room"],
    description: "讨论方案与任务分配",
    taskId: "design",
  },
  {
    id: "all-day",
    title: "资料整理日",
    start: "2026-09-17",
    end: "2026-09-18",
    allDay: true,
  },
  {
    id: "backlog",
    title: "待安排的用户访谈",
    description: "确认参与人员后安排时间",
  },
]);
const persist: SchedulerBeforeTransaction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  if (reject.value) throw new Error("Simulated save failure");
};
</script>
