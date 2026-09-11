<template>
  <c-space direction="column" block>
    <c-alert
      >按月、按年安排任务。无效日期可选择跳过或落到月底；“最后一个工作日”仅按周一至周五计算，不包含节假日调休。</c-alert
    >
    <c-space wrap>
      <c-select v-model="preset" :options="presets" aria-label="月年重复规则" />
      <c-input-number
        v-model="interval"
        :min="1"
        :max="12"
        aria-label="月年重复间隔"
      />
      <c-tag>{{ preset === "leap" ? "年一次" : "个月一次" }}</c-tag>
      <c-input-number
        v-model="count"
        :min="1"
        :max="10"
        aria-label="月年重复次数"
      />
      <c-tag>次后结束</c-tag>
      <c-checkbox
        v-if="preset === 'day31' || preset === 'leap'"
        v-model="lastDay"
        >缺少该日期时落到月底</c-checkbox
      >
    </c-space>
    <c-tag>未来 40 年内的前 {{ preview.length }} 次安排（点日期定位）</c-tag>
    <c-space wrap>
      <c-button
        v-for="item in preview"
        :key="item.id"
        @click="date = schedulerDate(item.start!)"
        >{{ schedulerDateKey(item.start!) }}</c-button
      >
    </c-space>
    <c-scheduler
      key="calendar-recurrence-preview"
      v-model:date="date"
      :model-value="events"
      default-mode="month"
      readonly
      @range-change="range = $event"
    />
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import {
  expandSchedulerRecurrences,
  getSchedulerRange,
  schedulerDate,
  schedulerDateKey,
} from "../core";
import type { SchedulerDate, SchedulerRecurringEvent } from "../core";
const preset = ref("day31");
const interval = ref(1);
const count = ref(6);
const lastDay = ref(false);
const presets = [
  { label: "每月 31 日", value: "day31" },
  { label: "每月最后一个工作日", value: "weekday" },
  { label: "每月第二个星期一", value: "monday" },
  { label: "每年 2 月 29 日", value: "leap" },
];
const date = ref<SchedulerDate>("2026-01-31");
const range = ref(getSchedulerRange(date.value, "month"));
watch(preset, () => {
  date.value = preset.value === "leap" ? "2024-02-29" : "2026-01-01";
});
const series = computed<SchedulerRecurringEvent[]>(() => {
  const start =
    preset.value === "leap"
      ? "2024-02-29"
      : preset.value === "day31"
        ? "2026-01-31"
        : "2026-01-01";
  return [
    {
      event: {
        id: "calendar-plan",
        title: presets.find((item) => item.value === preset.value)!.label,
        start: `${start}T09:00:00`,
        end: `${start}T10:00:00`,
      },
      rule: {
        frequency: preset.value === "leap" ? "yearly" : "monthly",
        interval: interval.value || 1,
        count: count.value || 1,
        ...(preset.value === "weekday"
          ? { weekOfMonth: -1, daysOfWeek: [1, 2, 3, 4, 5] }
          : preset.value === "monday"
            ? { weekOfMonth: 2, daysOfWeek: [1] }
            : {
                overflow: lastDay.value
                  ? ("last-day" as const)
                  : ("skip" as const),
              }),
      },
    },
  ];
});
const events = computed(() =>
  expandSchedulerRecurrences(series.value, range.value),
);
const preview = computed(() => {
  const start = schedulerDate(series.value[0].event.start!);
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 40);
  return expandSchedulerRecurrences(series.value, { start, end }).slice(0, 10);
});
</script>
