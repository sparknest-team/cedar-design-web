<template>
  <section class="scheduler-async-demo">
    <c-space direction="column" block>
      <c-space>
        <c-checkbox v-model="reject">下一次模拟保存失败</c-checkbox>
        <c-checkbox v-model="accept">父组件接受更新</c-checkbox>
        <c-button @click="reset">重置日程</c-button>
      </c-space>
      <p>
        本地模拟 600ms
        保存；失败开关在一次失败后自动复位，可直接重试。取消或父组件拒绝提案不改变已保存值。
      </p>
      <c-scheduler
        :model-value="events"
        default-date="2026-09-09"
        default-mode="resource-day"
        :resources="resources"
        :before-change="beforeChange"
        @update:model-value="update"
        @change="outcome = accept ? '父组件已接受' : '父组件未接受提案'"
        @change-error="outcome = '保存失败，原值不变'"
      />
      <p role="status">{{ outcome }}；活动请求：{{ pendingCount }}</p>
      <ul aria-label="异步已提交日程">
        <li v-for="event in events" :key="event.id" :data-demo-event="event.id">
          {{ event.title }}：{{ event.start ?? "未排期" }} →
          {{ event.end ?? "未排期" }}；资源：{{ event.resourceIds?.join(",") }}
        </li>
      </ul>
    </c-space>
  </section>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onDeactivated, ref } from "vue";
import type { SchedulerBeforeChange } from "../props";
import type { SchedulerEvent } from "../core";
import { createEvents, resources } from "./data";
const events = ref(createEvents());
const reject = ref(false);
const accept = ref(true);
const outcome = ref("尚未操作");
const pendingCount = ref(0);
const pending = new Map<ReturnType<typeof setTimeout>, () => void>();
const beforeChange: SchedulerBeforeChange = () =>
  new Promise<boolean>((resolve, rejectRequest) => {
    const fail = reject.value;
    const timer = setTimeout(() => {
      pending.delete(timer);
      pendingCount.value = pending.size;
      if (fail) {
        reject.value = false;
        rejectRequest(new Error("模拟接口失败"));
      } else resolve(true);
    }, 600);
    pending.set(timer, () => resolve(false));
    pendingCount.value = pending.size;
  });
function update(value: SchedulerEvent[]) {
  if (accept.value) events.value = value;
}
function cancelPending() {
  pending.forEach((cancel, timer) => {
    clearTimeout(timer);
    cancel();
  });
  pending.clear();
  pendingCount.value = 0;
}
function reset() {
  cancelPending();
  events.value = createEvents();
  outcome.value = "已重置";
}
onBeforeUnmount(cancelPending);
onDeactivated(cancelPending);
</script>
