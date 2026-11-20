<script setup lang="ts">
import { ref } from "vue";
import type { SchedulerEvent } from "../core";
import type { SchedulerWorkingHours } from "../core";
import type { SchedulerDateWorkingHours } from "../core";
import { proxyRefs as demoProxyRefs } from "vue";

const scene1 = demoProxyRefs(
  (() => {
    const rooms = [
      { id: "room-a", label: "会议室 A" },
      { id: "room-b", label: "会议室 B" },
    ];

    const hours: SchedulerWorkingHours[] = [
      { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 720 },
      { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 780, endMinute: 1080 },
    ];

    const events = ref<SchedulerEvent[]>([
      {
        id: "meeting",
        title: "产品评审",
        start: "2026-09-09T10:00:00",
        end: "2026-09-09T11:00:00",
        resourceIds: ["room-a"],
      },
    ]);
    return { rooms, hours, events };
  })(),
);

const scene2 = demoProxyRefs(
  (() => {
    const enabled = ref(true);

    const resources = [
      { id: "lin", label: "小林" },
      { id: "chen", label: "小陈" },
      { id: "device", label: "设备" },
    ];

    const hours = [
      { daysOfWeek: [1, 2, 3, 4, 5], startMinute: 540, endMinute: 1080 },
    ];

    const overrides: SchedulerDateWorkingHours[] = [
      { date: "2026-09-12", intervals: [{ startMinute: 540, endMinute: 720 }] },
      {
        date: "2026-09-12",
        resourceIds: ["lin"],
        intervals: [
          { startMinute: 600, endMinute: 720 },
          { startMinute: 780, endMinute: 900 },
        ],
      },
      { date: "2026-09-12", resourceIds: ["device"], intervals: [] },
      { date: "2026-09-30", intervals: [{ startMinute: 540, endMinute: 720 }] },
    ];

    const events = ref<SchedulerEvent[]>([
      {
        id: "makeup",
        title: "补班协作任务",
        start: "2026-09-12T10:00:00",
        end: "2026-09-12T11:00:00",
        resourceIds: ["lin", "chen"],
      },
    ]);
    return { enabled, resources, hours, overrides, events };
  })(),
);
</script>

<template>
  <div class="demo-comparison">
    <section
      class="demo-comparison-case demo-comparison-case--1"
      data-comparison-scene="working-hours"
    >
      <h4>工作时间与维护时段</h4>
      <c-space direction="column" block>
        <c-alert
          >会议室工作日 09:00–12:00、13:00–18:00
          可预约。灰色时段包含午休和非工作时间；新建、拖动和编辑均会校验完整时长。</c-alert
        >
        <c-scheduler
          v-model="scene1.events"
          default-date="2026-09-09"
          default-mode="resource-day"
          resource-label="会议室"
          :resources="scene1.rooms"
          :working-hours="scene1.hours"
          :allow-overlap="false"
        />
      </c-space>
    </section>

    <section
      class="demo-comparison-case demo-comparison-case--2"
      data-comparison-scene="date-working-hours"
    >
      <h4>指定日期工作时间</h4>
      <c-space direction="column" block>
        <c-alert
          >模拟周六补班：公共时段 09:00–12:00；小林改为
          10:00–12:00、13:00–15:00；设备全天关闭。关闭开关后恢复周一至周五规则。已有任务保留，再次保存时重新校验。</c-alert
        >
        <c-checkbox v-model="scene2.enabled">启用指定日期时段</c-checkbox>
        <c-scheduler
          key="date-hours"
          v-model="scene2.events"
          default-date="2026-09-12"
          default-mode="resource-day"
          :resources="scene2.resources"
          :working-hours="scene2.hours"
          :date-working-hours="scene2.enabled ? scene2.overrides : []"
        />
      </c-space>
    </section>
  </div>
</template>

<style scoped lang="less">
.demo-comparison {
  display: grid;
  gap: 24px;
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case {
  min-width: 0;
  max-width: 100%;
}
.demo-comparison-case > h4 {
  margin: 0 0 12px;
  font-size: 14px;
}
</style>
