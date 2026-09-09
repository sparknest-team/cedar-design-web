<template>
  <c-space direction="column" block>
    <c-checkbox v-model="reject">模拟保存失败</c-checkbox>
    <c-scheduler
      v-model="events"
      default-date="2026-09-09"
      default-mode="resource-day"
      :resources="resources"
      :before-change="beforeChange"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerBeforeChange } from "../props";
import { createEvents, resources } from "./data";
const events = ref(createEvents());
const reject = ref(false);
const beforeChange: SchedulerBeforeChange = async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  if (reject.value) throw new Error("模拟接口失败");
  return true;
};
</script>
