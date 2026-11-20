<template>
  <c-alert>
    点击日程先查看业务摘要，再进入高级详情。完整出勤单、任务与打卡记录由页面按
    metadata ID 查询，Scheduler 只保存展示字段和业务 ID。
  </c-alert>
  <c-scheduler
    v-model="events"
    :editable="false"
    :resources="resources"
    default-date="2026-09-09"
    default-mode="resource-day"
    :start-hour="0"
    :end-hour="24"
    :initial-scroll-minute="420"
    :modes="['resource-day']"
    :show-sidebar="false"
    @editor-request="activate"
  >
    <template #event="{ event }">
      <EventSummaryPopover
        :open="previewId === event.id"
        :title="event.title"
        @update:open="!$event && (previewId = undefined)"
        @click-outside="previewId = undefined"
      >
        <span :class="{ 'completed-event': event.readonly }">
          {{ event.title }} · {{ personLabel(event) }}
        </span>
        <template #content>
          <c-space v-if="orderOf(event)" direction="column" block>
            <c-space>
              <c-tag>{{ statusLabel(orderOf(event)!) }}</c-tag>
              <c-tag>{{ orderOf(event)!.source }}</c-tag>
            </c-space>
            <strong>{{ timeRange(event) }}</strong>
            <span>
              {{ orderOf(event)!.tasks.length }} 项任务 ·
              {{ totalMinutes(orderOf(event)!) }} 分钟 · 1 人
            </span>
            <span>设备：{{ deviceLabels(orderOf(event)!) }}</span>
            <span>最近打卡：{{ latestPunch(orderOf(event)!) }}</span>
            <c-space>
              <c-button status="primary" @click.stop="openDetails(event)">
                高级详情
              </c-button>
              <c-button @click.stop="previewId = undefined">关闭</c-button>
            </c-space>
          </c-space>
        </template>
      </EventSummaryPopover>
    </template>
  </c-scheduler>

  <c-dialog v-model:open="detailsOpen" title="出勤单高级详情" :footer="false">
    <template v-if="activeOrder">
      <c-space direction="column" block>
        <c-space>
          <c-tag>{{ statusLabel(activeOrder) }}</c-tag>
          <c-tag>{{ activeOrder.source }}</c-tag>
        </c-space>
        <p>执行人：{{ resourceLabel(activeOrder.personId) }} · 人数：1</p>
        <p>
          计划时间：{{ displayTime(activeOrder.plannedStart) }} –
          {{ displayTime(activeOrder.plannedEnd) }}
        </p>
        <p v-if="activeOrder.actualStart">
          实际时间：{{ displayTime(activeOrder.actualStart) }} –
          {{ displayTime(activeOrder.actualEnd) }}
        </p>
        <c-divider />
        <strong>任务与工单</strong>
        <div v-for="task in activeOrder.tasks" :key="task.id">
          <c-link :href="`#work-order-${task.id}`">{{ task.title }}</c-link>
          · 技能 {{ skillLabel(task.skill) }} · {{ task.standardMinutes }} 分钟
        </div>
        <p>总标准工时：{{ totalMinutes(activeOrder) }} 分钟</p>
        <c-divider />
        <strong>打卡记录</strong>
        <div v-for="record in activeOrder.punchRecords" :key="record.id">
          {{ resourceLabel(record.deviceId) }}：
          {{ displayTime(record.checkedInAt) }} –
          {{ displayTime(record.checkedOutAt) }}
        </div>
        <c-empty
          v-if="!activeOrder.punchRecords.length"
          description="暂无打卡记录"
        />
        <c-space>
          <c-button @click="detailsOpen = false">关闭</c-button>
          <c-button
            v-if="
              activeOrder.status !== 'closed' && activeOrder.kind !== 'rest'
            "
            status="primary"
            @click="closeOrder(activeOrder)"
          >
            按实际打卡时间关单
          </c-button>
        </c-space>
      </c-space>
    </template>
  </c-dialog>
</template>

<script setup lang="ts">
import { getLocale } from "@cedar-design/ui-vue";
import { computed, ref } from "vue";
import type {
  SchedulerEditorRequest,
  SchedulerEvent,
  SchedulerResource,
} from "@cedar-design/ui-vue";
import EventSummaryPopover from "./event-summary-popover.vue";
import {
  toTaskCalendarEvent,
  type TaskCalendarOrder,
} from "./task-calendar-model";

const resources: SchedulerResource[] = [
  { id: "person-li", label: "李卫东" },
  { id: "person-zhang", label: "张志强" },
  { id: "device-a", label: "月检站 A" },
  { id: "device-c", label: "预警处理台 C" },
];
const orders = ref<TaskCalendarOrder[]>([
  {
    id: "detail-101",
    kind: "work",
    status: "review",
    source: "设备待办",
    personId: "person-li",
    plannedStart: "2026-09-09T09:00:00",
    plannedEnd: "2026-09-09T11:00:00",
    tasks: [
      {
        id: "WO-301",
        title: "月检与运行参数复核",
        deviceId: "device-a",
        skill: "inspection",
        standardMinutes: 120,
      },
    ],
    punchRecords: [
      {
        id: "punch-1",
        deviceId: "device-a",
        checkedInAt: "2026-09-09T09:12:00",
        checkedOutAt: "2026-09-09T10:48:00",
      },
    ],
    color: "#1677ff",
  },
  {
    id: "detail-102",
    kind: "work",
    status: "closed",
    source: "站长负责范围",
    personId: "person-zhang",
    plannedStart: "2026-09-09T13:00:00",
    plannedEnd: "2026-09-09T14:00:00",
    actualStart: "2026-09-09T13:08:00",
    actualEnd: "2026-09-09T13:52:00",
    tasks: [
      {
        id: "WO-302",
        title: "预警处理",
        deviceId: "device-c",
        skill: "warning",
        standardMinutes: 60,
      },
    ],
    punchRecords: [
      {
        id: "punch-2",
        deviceId: "device-c",
        checkedInAt: "2026-09-09T13:08:00",
        checkedOutAt: "2026-09-09T13:52:00",
      },
    ],
    color: "#86909c",
  },
  {
    id: "detail-rest",
    kind: "rest",
    status: "planned",
    source: "个人安排",
    personId: "person-li",
    plannedStart: "2026-09-09T12:00:00",
    plannedEnd: "2026-09-09T13:00:00",
    tasks: [],
    punchRecords: [],
    color: "#00a854",
  },
]);
const events = ref<SchedulerEvent[]>(orders.value.map(toTaskCalendarEvent));
const previewId = ref<string>();
const activeOrderId = ref<string>();
const detailsOpen = ref(false);
const activeOrder = computed(() =>
  orders.value.find((order) => order.id === activeOrderId.value),
);

function activate(request: SchedulerEditorRequest) {
  if (request.action !== "edit") return;
  previewId.value = request.event.id;
  activeOrderId.value = businessId(request.event);
}
function openDetails(event: SchedulerEvent) {
  activeOrderId.value = businessId(event);
  previewId.value = undefined;
  detailsOpen.value = true;
}
function closeOrder(order: TaskCalendarOrder) {
  const punches = order.punchRecords;
  const first = punches[0]?.checkedInAt;
  const last = punches.at(-1)?.checkedOutAt;
  if (!first || !last) return;
  orders.value = orders.value.map((item) =>
    item.id === order.id
      ? { ...item, status: "closed", actualStart: first, actualEnd: last }
      : item,
  );
  events.value = orders.value.map(toTaskCalendarEvent);
}
function businessId(event: SchedulerEvent) {
  return String(event.metadata?.attendanceOrderId ?? event.id);
}
function orderOf(event: SchedulerEvent) {
  return orders.value.find((order) => order.id === businessId(event));
}
function totalMinutes(order: TaskCalendarOrder) {
  return order.tasks.reduce((total, task) => total + task.standardMinutes, 0);
}
function deviceLabels(order: TaskCalendarOrder) {
  return (
    [...new Set(order.tasks.map((task) => resourceLabel(task.deviceId)))].join(
      "、",
    ) || "无"
  );
}
function personLabel(event: SchedulerEvent) {
  return resourceLabel(orderOf(event)?.personId);
}
function resourceLabel(id?: string) {
  return resources.find((resource) => resource.id === id)?.label ?? "未知";
}
function skillLabel(skill: string) {
  return { inspection: "巡检", warning: "预警处理" }[skill] ?? skill;
}
function statusLabel(order: TaskCalendarOrder) {
  if (order.kind === "rest") return "休息";
  return {
    planned: "计划中",
    active: "执行中",
    review: "待关单",
    closed: "已完成",
  }[order.status];
}
function latestPunch(order: TaskCalendarOrder) {
  const record = order.punchRecords.at(-1);
  return record
    ? `${displayTime(record.checkedInAt)} – ${displayTime(record.checkedOutAt)}`
    : "暂无";
}
function timeRange(event: SchedulerEvent) {
  return `${displayTime(event.start)} – ${displayTime(event.end)}`;
}
function displayTime(value?: string | number | Date) {
  return value == null
    ? "未记录"
    : new Date(value).toLocaleString(getLocale(), {
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
}
</script>

<style scoped>
.completed-event {
  opacity: 0.55;
}
</style>
