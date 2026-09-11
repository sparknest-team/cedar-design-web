<template>
  <c-space direction="column" block>
    <c-alert
      >重复会议按可见范围展开。编辑、拖动或删除卡片只影响这一次；新建日程是独立安排。修改上方规则会重建系列并清除本例中的例外。</c-alert
    >
    <c-space wrap>
      <c-select
        v-model="frequency"
        :options="frequencies"
        aria-label="重复频率"
      />
      <c-input-number
        v-model="interval"
        :min="1"
        :max="12"
        aria-label="重复间隔"
      />
      <c-tag>{{
        frequency === "daily" ? "天一次" : "周一次（周一、三、五）"
      }}</c-tag>
      <c-input-number
        v-model="count"
        :min="1"
        :max="60"
        aria-label="重复次数"
      />
      <c-tag>次后结束</c-tag>
      <c-button :disabled="!exceptions.length" @click="exceptions = []"
        >恢复全部例外</c-button
      >
    </c-space>
    <c-tag
      >{{ exceptions.length }} 条本次例外 ·
      {{ standalone.length }} 条独立安排</c-tag
    >
    <c-scheduler
      v-model="events"
      default-date="2026-09-09"
      default-mode="week"
      :resources="resources"
      :before-transaction="validateChange"
      @range-change="range = $event"
    >
      <template #event="{ event }">
        {{ event.title }}
        <c-tag v-if="occurrenceIds.has(event.id)" size="small"
          >重复 · 仅本次</c-tag
        >
      </template>
    </c-scheduler>
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  SchedulerError,
  applySchedulerChange,
  diffSchedulerEvents,
  expandSchedulerRecurrences,
  getSchedulerRange,
  setSchedulerRecurrenceException,
} from "../core";
import type {
  SchedulerEvent,
  SchedulerRecurrenceException,
  SchedulerRecurrenceRule,
  SchedulerRecurringEvent,
} from "../core";
import type { SchedulerBeforeTransaction } from "../props";
const validateChange: SchedulerBeforeTransaction = ({ changes }) => {
  if (
    changes.some(
      (change) =>
        occurrenceIds.value.has(change.event.id) &&
        change.type !== "remove" &&
        change.event.start == null,
    )
  ) {
    throw new SchedulerError(
      "invalid-event",
      "重复实例必须保留排期；取消本次请使用删除",
    );
  }
};
const frequencies = [
  { label: "每天", value: "daily" },
  { label: "每周", value: "weekly" },
];
const frequency = ref<SchedulerRecurrenceRule["frequency"]>("weekly");
const interval = ref(1);
const count = ref(12);
const range = ref(getSchedulerRange("2026-09-09", "week"));
const resources = [
  { id: "design", label: "林夏 · 设计" },
  { id: "dev", label: "陈舟 · 前端" },
];
const exceptions = ref<SchedulerRecurrenceException[]>([]);
const standalone = ref<SchedulerEvent[]>([]);
const series = computed<SchedulerRecurringEvent[]>(() => [
  {
    event: {
      id: "weekly-review",
      title: "项目同步会",
      start: "2026-09-07T09:00:00",
      end: "2026-09-07T10:00:00",
      resourceIds: ["design", "dev"],
    },
    rule: {
      frequency: frequency.value,
      interval: interval.value || 1,
      count: count.value || 1,
      daysOfWeek: frequency.value === "weekly" ? [1, 3, 5] : undefined,
    },
  },
]);
watch([frequency, interval, count], () => {
  exceptions.value = [];
});
const occurrences = computed(() =>
  expandSchedulerRecurrences(series.value, range.value, {
    exceptions: exceptions.value,
  }),
);
const occurrenceIds = computed(
  () => new Set(occurrences.value.map((event) => event.id)),
);
const events = computed<SchedulerEvent[]>({
  get: () => [...occurrences.value, ...standalone.value],
  set: (next) => {
    const previous = [...occurrences.value, ...standalone.value];
    const originals = new Map(
      occurrences.value.map((event) => [event.id, event]),
    );
    let nextExceptions = exceptions.value;
    let nextStandalone = standalone.value;
    for (const change of diffSchedulerEvents(previous, next)) {
      const original = originals.get(change.event.id);
      if (original)
        nextExceptions = setSchedulerRecurrenceException(
          nextExceptions,
          original,
          change.type === "remove" ? undefined : change.event,
        );
      else nextStandalone = applySchedulerChange(nextStandalone, change);
    }
    // A real backend saves these series/exception records atomically, not expanded instances.
    exceptions.value = nextExceptions;
    standalone.value = nextStandalone;
  },
});
</script>
