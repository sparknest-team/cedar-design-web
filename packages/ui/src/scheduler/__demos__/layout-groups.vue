<template>
  <c-space direction="column" block>
    <c-alert
      >分组仅共享布局位置。业务关联保存在
      metadata，修改单块不会自动修改整组。</c-alert
    >
    <c-space>
      <c-checkbox v-model="grouped">连续日程组成布局组</c-checkbox>
      <c-checkbox v-model="custom">自定义横向留白</c-checkbox>
    </c-space>
    <c-scheduler
      v-model="displayEvents"
      :default-date="today"
      default-mode="day"
      :event-layout="custom ? layout : 'stack'"
      :show-sidebar="false"
      :start-hour="8"
      :end-hour="17"
    >
      <template #event="{ event }">
        <strong>{{ event.title }}</strong>
        <div v-if="event.metadata?.reference">
          关联：{{ event.metadata.reference }}
        </div>
      </template>
    </c-scheduler>
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { SchedulerEvent, SchedulerEventLayout } from "../core";
const today = new Date();
const grouped = ref(true);
const custom = ref(false);
const at = (hour: number) => {
  const date = new Date(today);
  date.setHours(hour, 0, 0, 0);
  return date;
};
const events = ref<SchedulerEvent[]>([
  {
    id: "a",
    title: "阶段一",
    start: at(9),
    end: at(11),
    metadata: { reference: "A" },
  },
  {
    id: "b",
    title: "阶段二",
    start: at(11),
    end: at(13),
    metadata: { reference: "A" },
  },
  { id: "c", title: "独立日程", start: at(10), end: at(12) },
  {
    id: "d",
    title: "间隔后的阶段",
    start: at(15),
    end: at(16),
    metadata: { reference: "A" },
  },
]);
// Only the application interprets metadata and chooses which blocks share layout.
const displayEvents = computed({
  get: () =>
    events.value.map((event) => ({
      ...event,
      layoutGroupId:
        grouped.value && typeof event.metadata?.reference === "string"
          ? event.metadata.reference
          : undefined,
    })),
  set: (value: SchedulerEvent[]) => {
    events.value = value;
  },
});
// Product-specific percentages stay in the demo. Fractions are relative to one date/resource column.
const layout: SchedulerEventLayout = ({ column, columns }) => {
  const left = (column * 0.9) / columns;
  return {
    left,
    width: Math.min(Math.max(0.45, 1 - 0.1 * columns), 0.9 - left),
  };
};
</script>
