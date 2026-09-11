<template>
  <c-space direction="column" block>
    <c-alert
      >检测设备默认可并行处理 2 个任务。09:00–11:00 与 10:00–12:00 的两单已占满
      10:00–11:00；尝试追加第三单，或提高容量后重试。降低容量保留已有日程，并在下方标出超额时段。</c-alert
    >
    <c-space wrap>
      <c-button @click="capacity = 1">容量设为 1</c-button>
      <c-button @click="capacity = 2">容量设为 2</c-button>
      <c-button @click="capacity = 3">容量设为 3</c-button>
      <c-button status="primary" @click="addThird">尝试追加第三单</c-button>
      <c-button @click="reset">重置容量示例</c-button>
      <c-tag>当前容量：{{ capacity }}</c-tag>
      <c-tag v-if="result">{{ result }}</c-tag>
    </c-space>
    <c-space direction="column" block>
      <c-tag
        v-for="span in load"
        :key="+span.start"
        :status="span.exceeded ? 'danger' : 'success'"
      >
        {{ format(span.start) }}–{{ format(span.end) }}：{{ span.load }}/{{
          span.capacity
        }}
        {{ span.exceeded ? "超出容量" : "容量内" }}
      </c-tag>
      <c-tag v-if="!load.length">当前可见范围没有占用</c-tag>
    </c-space>
    <c-scheduler
      key="resource-capacity"
      ref="scheduler"
      v-model="events"
      default-date="2026-09-15"
      default-mode="resource-timeline"
      default-scale="hour"
      :resources="resources"
      history
      @range-change="range = $event"
    >
      <template #resource-header="{ resource }">
        <c-space
          ><span>{{ resource?.label }}</span
          ><c-tag>容量 {{ resource?.capacity }}</c-tag></c-space
        >
      </template>
    </c-scheduler>
  </c-space>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import type { SchedulerInstance } from "../index";
import type { SchedulerEvent } from "../core";
import {
  getSchedulerResourceLoad,
  getSchedulerRange,
  schedulerDateKey,
} from "../core";
const scheduler = ref<SchedulerInstance>();
const capacity = ref(2);
const resources = computed(() => [
  { id: "lab", label: "检测设备", capacity: capacity.value },
]);
const initial: SchedulerEvent[] = [
  {
    id: "sample-a",
    title: "样品甲",
    start: "2026-09-15T09:00:00",
    end: "2026-09-15T11:00:00",
    resourceIds: ["lab"],
  },
  {
    id: "sample-b",
    title: "样品乙",
    start: "2026-09-15T10:00:00",
    end: "2026-09-15T12:00:00",
    resourceIds: ["lab"],
  },
];
const events = ref<SchedulerEvent[]>([...initial]);
const range = ref(getSchedulerRange("2026-09-15", "day"));
const load = computed(() =>
  getSchedulerResourceLoad(events.value, resources.value[0], range.value),
);
const result = ref("");
const format = (date: Date) =>
  `${schedulerDateKey(date)} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
async function addThird() {
  if (events.value.some((event) => event.id === "sample-c")) {
    result.value = "第三单已存在，可撤销或重置后重试";
    return;
  }
  const saved = await scheduler.value?.change({
    type: "create",
    event: {
      id: "sample-c",
      title: "样品丙",
      start: "2026-09-15T10:30:00",
      end: "2026-09-15T11:00:00",
      resourceIds: ["lab"],
    },
  });
  result.value = saved ? "第三单已保存" : "第三单未保存：超出容量";
}
function reset() {
  events.value = [...initial];
  capacity.value = 2;
  result.value = "";
  scheduler.value?.goToDate(new Date(2026, 8, 15));
}
</script>
