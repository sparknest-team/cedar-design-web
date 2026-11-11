<template>
  <c-space direction="column" block>
    <c-alert
      >每条日程可配置资源占用量和角色。两条各占 0.5 的日程恰好占满容量
      1；尝试新增一条可验证阻止或提醒策略。详情中可直接修改分配信息，资源表头显示本日峰值负载。</c-alert
    >
    <c-space
      ><c-button @click="policy = {}">超载时阻止</c-button
      ><c-button @click="policy = { capacity: 'warn' }">超载时提醒</c-button
      ><c-button @click="add">新增 0.5 占用</c-button></c-space
    >
    <c-scheduler
      ref="scheduler"
      v-model="events"
      default-date="2026-09-22"
      default-mode="resource-timeline"
      default-scale="hour"
      :resources="resources"
      :rule-policy="policy"
      show-assignment-details
      show-resource-load
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerInstance } from "../index";
import type { SchedulerEvent, SchedulerRulePolicy } from "../core";
const scheduler = ref<SchedulerInstance>();
const resources = [{ id: "device", label: "实验设备", capacity: 1 }];
const policy = ref<SchedulerRulePolicy>({});
let sequence = 2;
const events = ref<SchedulerEvent[]>(
  [0, 1].map((i) => ({
    id: `load${i}`,
    title: `任务 ${i + 1}`,
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["device"],
    resourceDetails: { device: { units: 0.5, role: i ? "协作" : "负责" } },
  })),
);
function add() {
  const id = sequence++;
  return scheduler.value?.change({
    type: "create",
    event: { ...events.value[0], id: `load${id}`, title: `任务 ${id + 1}` },
  });
}
</script>
