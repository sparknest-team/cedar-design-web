<template>
  <c-space direction="column" block>
    <c-alert
      >准备 → 执行 →
      验收里程碑。依赖连线在时间线中展示；把执行拖到准备完成前会被阻止。里程碑使用相同起止时间，不占用资源容量。缩放按钮以视口中心为锚点调整刻度宽度。</c-alert
    >
    <c-scheduler
      v-model="events"
      default-date="2026-09-22"
      default-mode="resource-timeline"
      default-scale="hour"
      :resources="resources"
      :dependencies="dependencies"
      show-resource-load
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent, SchedulerDependency } from "../core";
const resources = [{ id: "team", label: "执行团队", capacity: 1 }];
const dependencies: SchedulerDependency[] = [
  { id: "prepare-run", fromId: "prepare", toId: "run" },
  { id: "run-accept", fromId: "run", toId: "accept" },
];
const events = ref<SchedulerEvent[]>([
  {
    id: "prepare",
    title: "准备",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
    resourceIds: ["team"],
  },
  {
    id: "run",
    title: "执行",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T12:00:00",
    resourceIds: ["team"],
  },
  {
    id: "accept",
    title: "验收里程碑",
    start: "2026-09-22T12:00:00",
    end: "2026-09-22T12:00:00",
    milestone: true,
    resourceIds: ["team"],
  },
]);
</script>
