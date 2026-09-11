<template>
  <c-space direction="column" block>
    <c-alert
      >红线标出当前本地时间，每 30
      秒刷新。可以切换日、周和资源日程；日和资源日程查看明天时红线消失。标线不影响新建和拖动。</c-alert
    >
    <c-space wrap>
      <c-checkbox v-model="enabled">显示现在时间线</c-checkbox>
      <c-button @click="date = new Date()">查看今天</c-button>
      <c-button @click="date = addSchedulerDays(new Date(), 1)"
        >查看明天</c-button
      >
    </c-space>
    <c-scheduler
      key="now-indicator"
      v-model:date="date"
      :show-now-indicator="enabled"
      default-mode="resource-day"
      :modes="['day', 'week', 'resource-day']"
      :start-hour="0"
      :end-hour="24"
      :resources="resources"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { addSchedulerDays } from "../core";
const date = ref(new Date());
const enabled = ref(true);
const resources = [
  { id: "a", label: "今日值班 A" },
  { id: "b", label: "今日值班 B" },
];
</script>
