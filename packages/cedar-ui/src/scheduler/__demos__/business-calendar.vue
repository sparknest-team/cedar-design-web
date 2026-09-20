<template>
  <c-space direction="column" block>
    <c-alert
      >以下日期均为模拟企业日历，不是官方放假通知。示例包含模拟春节休假、周末补班和月末企业休假；同一配置用于月末工作日计算和预约校验。</c-alert
    >
    <c-checkbox v-model="enabled">启用模拟休假与补班</c-checkbox>
    <c-space wrap
      ><c-tag v-for="item in settlements" :key="item.id"
        >结算日：{{ schedulerDateKey(item.start!) }}</c-tag
      ></c-space
    >
    <c-tag
      >2 月 27 日企业休假、28
      日周六补班。可尝试新增或移动任务，对比开关前后的保存结果。</c-tag
    >
    <c-scheduler
      key="business-calendar-bookings"
      v-model="bookings"
      default-date="2026-02-26"
      default-mode="week"
      :working-hours="hours"
      :disabled-ranges="blocked"
      :before-transaction="validateCalendar"
      @range-change="range = $event"
    />
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import {
  expandSchedulerRecurrences,
  getSchedulerAvailabilityIssues,
  getSchedulerRange,
  schedulerDate,
  schedulerDateKey,
  SchedulerError,
} from "../core";
import { getSchedulerCalendarDisabledRanges } from "../core/business-calendar";
import type { SchedulerBusinessCalendar, SchedulerEvent } from "../core";
import type { SchedulerBeforeTransaction } from "../props";
const enabled = ref(true);
const range = ref(getSchedulerRange("2026-02-26", "week"));
const overrides: NonNullable<SchedulerBusinessCalendar["overrides"]> = [
  ...[16, 17, 18, 19, 20].map((day) => ({
    date: `2026-02-${day}`,
    working: false,
    label: "模拟春节休假",
  })),
  { date: "2026-02-14", working: true, label: "模拟补班" },
  { date: "2026-02-27", working: false, label: "企业休假" },
  { date: "2026-02-28", working: true, label: "模拟补班" },
];
const calendar = computed<SchedulerBusinessCalendar>(() => ({
  overrides: enabled.value ? overrides : [],
}));
// Calendar decides which dates work; hours separately decide when those dates work.
const hours = [
  { daysOfWeek: [0, 1, 2, 3, 4, 5, 6], startMinute: 540, endMinute: 1080 },
];
const blocked = computed(() =>
  getSchedulerCalendarDisabledRanges(calendar.value, range.value),
);
const bookings = ref<SchedulerEvent[]>([
  {
    id: "regular-job",
    title: "常规工作日任务",
    start: "2026-02-26T10:00:00",
    end: "2026-02-26T11:00:00",
  },
]);
const settlements = computed(() =>
  expandSchedulerRecurrences(
    [
      {
        event: {
          id: "settlement",
          title: "月末结算",
          start: "2026-02-01T09:00:00",
          end: "2026-02-01T10:00:00",
        },
        rule: {
          frequency: "monthly",
          weekOfMonth: -1,
          businessCalendar: calendar.value,
          count: 3,
        },
      },
    ],
    { start: new Date(2026, 1, 1), end: new Date(2026, 4, 1) },
  ),
);
const validateCalendar: SchedulerBeforeTransaction = ({ changes }) => {
  for (const change of changes) {
    if (
      change.type === "remove" ||
      change.event.start == null ||
      change.event.end == null
    )
      continue;
    // Editor changes can extend outside the visible window: validate the full proposal.
    const disabledRanges = getSchedulerCalendarDisabledRanges(calendar.value, {
      start: schedulerDate(change.event.start),
      end: schedulerDate(change.event.end),
    });
    const issues = getSchedulerAvailabilityIssues(change.event, {
      disabledRanges,
    });
    if (issues.length)
      throw new SchedulerError("unavailable", "日程包含非工作日", issues);
  }
};
</script>
