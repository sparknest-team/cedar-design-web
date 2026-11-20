<template>
  <p>
    设备共享使用时段：拖入左侧任务后确认排期；维护中的设备禁止新增分配，同一设备的时间冲突会阻止保存。
  </p>
  <c-scheduler
    v-model="events"
    :resources="devices"
    resource-label="设备"
    default-mode="resource-day"
    default-date="2026-09-09"
    :allow-overlap="false"
  >
    <template #sidebar-extra="{ startDrag, cancelDrag, disabled }">
      <strong>待安排工单</strong>
      <c-button
        v-for="task in tasks"
        :key="String(task.metadata?.taskId)"
        :draggable="!disabled"
        :disabled="disabled"
        @dragstart="startDrag(task, $event)"
        @dragend="cancelDrag"
      >
        {{ task.title }} · {{ task.duration }} 分钟
      </c-button>
    </template>
    <template #resource-header="{ resource, date }">
      <strong>{{ resource?.label ?? date.toLocaleDateString(getLocale()) }}</strong>
      <small v-if="resource">
        · {{ resource.disabled ? "维护中" : "可预约" }}</small
      >
    </template>
    <template #event="{ event }">
      <strong>{{ event.title }}</strong
      ><span v-if="event.metadata?.taskId">
        · {{ event.metadata?.taskId }}</span
      >
    </template>
  </c-scheduler>
</template>
<script setup lang="ts">
import { getLocale } from "@cedar-design/ui-vue";
import { ref } from "vue";
import type {
  SchedulerEvent,
  SchedulerResource,
  SchedulerEventTemplate,
} from "@cedar-design/ui-vue";
const devices: SchedulerResource[] = [
  { id: "laser-01", label: "激光切割机 01" },
  { id: "printer-02", label: "3D 打印机 02" },
  { id: "scanner-03", label: "扫描仪 03", disabled: true },
];
const tasks: SchedulerEventTemplate[] = [
  {
    title: "样件加工",
    duration: 90,
    metadata: { taskId: "JOB-201" },
    description: "安排加工设备并确认材料",
  },
  {
    title: "设备校准",
    duration: 30,
    metadata: { taskId: "JOB-202" },
    description: "校准完成后记录结果",
  },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "run-1",
    title: "批次 A 加工",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T11:00:00",
    resourceIds: ["laser-01"],
    metadata: { taskId: "JOB-100" },
  },
  {
    id: "run-2",
    title: "联合验收（共用两台设备）",
    start: "2026-09-09T14:00:00",
    end: "2026-09-09T15:00:00",
    resourceIds: ["laser-01", "printer-02"],
    metadata: { taskId: "JOB-101" },
  },
  {
    id: "maintenance",
    title: "停机维护",
    start: "2026-09-09",
    end: "2026-09-10",
    allDay: true,
    resourceIds: ["scanner-03"],
    readonly: true,
  },
]);
</script>
