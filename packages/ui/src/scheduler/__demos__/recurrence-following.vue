<template>
  <c-space direction="column" block>
    <c-alert
      >点击会议选择“仅本次”或“本次及以后”。周五预设了一条“客户参会”例外：默认保护它，明确选择清除后才允许拆分。修改日期时需保留原规则的星期。</c-alert
    >
    <c-space wrap>
      <c-button @click="reset">重置示例</c-button>
      <c-checkbox v-model="reject">模拟保存失败</c-checkbox>
      <c-tag
        >{{ state.series.length }} 个系列 ·
        {{ state.exceptions.length }} 条例外</c-tag
      >
    </c-space>
    <c-space wrap>
      <c-tag v-for="item in state.series" :key="item.event.id"
        >{{ item.event.title }} · {{ item.rule.count ?? "不限" }} 次</c-tag
      >
    </c-space>
    <c-tag>{{ status }}</c-tag>
    <c-scheduler
      key="recurrence-following-calendar"
      :model-value="events"
      default-date="2026-09-09"
      default-mode="week"
      readonly
      :editable="false"
      @range-change="range = $event"
      @event-click="openEditor"
    />
    <c-dialog v-model:open="open" title="调整重复安排" :footer="false">
      <c-form
        v-if="draft"
        :model="draft"
        layout="vertical"
        @submit="save(false)"
      >
        <c-form-item label="修改范围">
          <c-select v-model="scope" :options="scopes" aria-label="修改范围" />
        </c-form-item>
        <c-form-item v-if="scope === 'following'" label="后续例外">
          <c-select
            v-model="policy"
            :options="policies"
            aria-label="后续例外处理"
          />
        </c-form-item>
        <c-form-item label="会议标题"
          ><c-input v-model="draft.title" aria-label="会议标题"
        /></c-form-item>
        <c-form-item label="开始时间"
          ><c-date
            v-model="draft.start"
            show-time
            value-format="Date"
            aria-label="会议开始"
        /></c-form-item>
        <c-form-item label="结束时间"
          ><c-date
            v-model="draft.end"
            show-time
            value-format="Date"
            aria-label="会议结束"
        /></c-form-item>
        <c-alert v-if="error" status="danger">{{ error }}</c-alert>
        <c-space wrap>
          <c-button status="primary" @click="save(false)">保存修改</c-button>
          <c-button @click="save(true)">取消所选安排</c-button>
          <c-button @click="open = false">返回</c-button>
        </c-space>
      </c-form>
    </c-dialog>
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref, shallowRef } from "vue";
import {
  cloneSchedulerEvent,
  expandSchedulerRecurrences,
  getSchedulerRange,
  schedulerDate,
  setSchedulerRecurrenceException,
  splitSchedulerRecurrence,
} from "../core";
import type {
  SchedulerEvent,
  SchedulerOccurrence,
  SchedulerRecurringEvent,
  SchedulerRecurrenceException,
} from "../core";
const range = ref(getSchedulerRange("2026-09-09", "week"));
function initialState(): {
  series: SchedulerRecurringEvent[];
  exceptions: SchedulerRecurrenceException[];
} {
  const series: SchedulerRecurringEvent[] = [
    {
      event: {
        id: "team-sync",
        title: "团队同步会",
        start: "2026-09-07T09:00:00",
        end: "2026-09-07T10:00:00",
      },
      rule: { frequency: "weekly", daysOfWeek: [1, 3, 5], count: 9 },
    },
  ];
  const friday = expandSchedulerRecurrences(
    series,
    getSchedulerRange("2026-09-09", "week"),
  )[2];
  return {
    series,
    exceptions: setSchedulerRecurrenceException([], friday, {
      ...friday,
      title: "客户参会",
    }),
  };
}
const state = shallowRef(initialState());
const events = computed(() =>
  expandSchedulerRecurrences(state.value.series, range.value, {
    exceptions: state.value.exceptions,
  }),
);
const open = ref(false);
const reject = ref(false);
const scope = ref<"single" | "following">("single");
const policy = ref<"reject" | "discard">("reject");
const scopes = [
  { label: "仅本次", value: "single" },
  { label: "本次及以后", value: "following" },
];
const policies = [
  { label: "保护已有例外", value: "reject" },
  { label: "清除后续例外", value: "discard" },
];
const selected = shallowRef<SchedulerOccurrence>();
const draft = ref<{ title: string; start: Date; end: Date }>();
const error = ref("");
const status = ref("点击日程调整安排");
let baseline = state.value;
let nextId = 0;
function openEditor(event: SchedulerEvent) {
  const occurrence = events.value.find((item) => item.id === event.id);
  if (!occurrence) return;
  selected.value = { ...occurrence };
  draft.value = {
    title: occurrence.title,
    start: schedulerDate(occurrence.start!),
    end: schedulerDate(occurrence.end!),
  };
  scope.value = "single";
  policy.value = "reject";
  error.value = "";
  baseline = state.value;
  open.value = true;
}
function save(remove: boolean) {
  if (!selected.value || !draft.value) return;
  error.value = "";
  try {
    if (state.value !== baseline)
      throw new Error("安排已变化，请关闭后重新打开。");
    const replacement = {
      ...cloneSchedulerEvent(selected.value),
      ...draft.value,
    };
    let proposal: typeof state.value;
    let discarded = 0;
    if (scope.value === "following") {
      const affected = state.value.exceptions.filter(
        (item) =>
          item.seriesId === selected.value!.seriesId &&
          +schedulerDate(item.originalStart) >=
            +schedulerDate(selected.value!.originalStart),
      );
      if (affected.length && policy.value === "reject")
        throw new Error(
          `后续有 ${affected.length} 条例外，请选择清除后续例外或仅修改本次。`,
        );
      const result = splitSchedulerRecurrence(
        state.value.series,
        state.value.exceptions,
        selected.value,
        {
          nextEvent: remove
            ? undefined
            : { ...replacement, id: `team-sync-part-${nextId + 1}` },
          exceptionPolicy: policy.value,
        },
      );
      proposal = { series: result.series, exceptions: result.exceptions };
      discarded = result.removedExceptions.length;
    } else
      proposal = {
        series: state.value.series,
        exceptions: setSchedulerRecurrenceException(
          state.value.exceptions,
          selected.value,
          remove ? undefined : replacement,
        ),
      };
    // Save this complete canonical proposal atomically before publishing the projection.
    if (reject.value) throw new Error("模拟保存失败，原系列和例外均保留。");
    state.value = proposal;
    nextId++;
    status.value = `${remove ? "已取消" : "已修改"}${scope.value === "following" ? "本次及以后" : "本次"}；清除 ${discarded} 条后续例外`;
    open.value = false;
  } catch (cause) {
    error.value = cause instanceof Error ? cause.message : "保存失败";
  }
}
function reset() {
  state.value = initialState();
  open.value = false;
  status.value = "点击日程调整安排";
  reject.value = false;
}
</script>
