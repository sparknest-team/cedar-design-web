<template>
  <p>仅管理发布时间与工作计划，不传人员或设备列表。编辑器不显示资源字段。</p>
  <c-scheduler
    v-model="events"
    :modes="['day', 'week', 'month', 'agenda']"
    default-date="2026-09-09"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent } from "@cedar-design/ui";
const events = ref<SchedulerEvent[]>([
  {
    id: "release",
    title: "产品发布",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T11:00:00",
    description: "检查发布清单",
  },
  {
    id: "campaign",
    title: "专题活动",
    start: "2026-09-10",
    end: "2026-09-13",
    allDay: true,
  },
  { id: "draft", title: "下期内容选题", description: "未排期，可拖入时间格" },
]);
</script>
