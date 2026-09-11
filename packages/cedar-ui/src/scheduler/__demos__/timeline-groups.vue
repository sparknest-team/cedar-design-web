<template>
  <c-space direction="column" block>
    <c-alert
      >按部门折叠资源；切换小时刻度可查看定位日的精确排期。资源名称在横向滚动时保持可见。</c-alert
    >
    <c-scheduler
      v-model="events"
      v-model:scale="scale"
      v-model:expanded-keys="expanded"
      default-date="2026-09-09"
      default-mode="resource-timeline"
      :resources="resources"
      :resource-group-by="groupBy"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerResource, SchedulerScale } from "../core";
import { createEvents, resources } from "./data";
const events = ref(createEvents());
const scale = ref<SchedulerScale>("hour");
const expanded = ref(["产品与设计", "研发"]);
const groupBy = (resource: SchedulerResource) =>
  resource.id === resources[0].id ? "产品与设计" : "研发";
</script>
