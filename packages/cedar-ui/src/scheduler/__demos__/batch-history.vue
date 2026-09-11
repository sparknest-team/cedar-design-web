<template>
  <c-space direction="column" block>
    <c-alert
      >开启“多选”后点击日程卡片，可整批后移一天、添加资源或删除。共享日程在多个资源列中只计为一项；撤销和重做同样经过保存接口。</c-alert
    >
    <c-checkbox v-model="reject">模拟整批保存失败</c-checkbox>
    <c-scheduler
      v-model="events"
      v-model:selected-keys="selected"
      default-date="2026-09-09"
      default-mode="resource-timeline"
      :resources="resources"
      selectable
      history
      :before-transaction="persist"
    />
    <c-tag>{{ status }}</c-tag>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerBeforeTransaction } from "../props";
import { createEvents, resources } from "./data";
const events = ref(createEvents());
const selected = ref<string[]>([]);
const reject = ref(false);
const status = ref("尚未提交");
const persist: SchedulerBeforeTransaction = async (context) => {
  status.value = `正在提交 ${context.changes.length} 项变更…`;
  await new Promise((resolve) => setTimeout(resolve, 350));
  if (reject.value) {
    status.value = "整批保存失败，日程和历史均保留";
    throw new Error("Demo rejected");
  }
  status.value = `已提交 ${context.changes.length} 项变更（${context.action === "undo" ? "撤销" : context.action === "redo" ? "重做" : "修改"}）`;
};
</script>
