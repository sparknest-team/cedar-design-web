<template>
  <c-popover
    :trigger="['hover', 'focus']"
    placement="right-start"
    title="设备打卡记录"
    @update:open="reveal"
  >
    <span tabindex="0" class="punch-trigger"
      >{{ task.title }} · {{ task.skill }} / {{ task.people }} 人 /
      {{ task.minutes }} 分钟</span
    >
    <template #content>
      <div ref="list" class="punch-list">
        <c-empty v-if="!records.length" description="暂无打卡记录" />
        <div
          v-for="record in records"
          :key="record.id"
          :data-nearest="record.id === nearest"
          :class="{ nearest: record.id === nearest }"
        >
          <strong>{{
            data.resources.find((item) => item.id === record.personId)?.label
          }}</strong>
          <div>登录 {{ format(record.start) }}</div>
          <div>注销 {{ format(record.end) }}</div>
        </div>
      </div>
    </template>
  </c-popover>
</template>
<script setup lang="ts">
import { getLocale } from "@cedar-design/ui-vue";
import { computed, nextTick, ref } from "vue";
import {
  nearestPunch,
  type WorkbenchData,
  type WorkbenchTask,
} from "./workbench-model";
const props = defineProps<{
  data: WorkbenchData;
  task: WorkbenchTask;
  start: string;
}>();
const list = ref<HTMLElement>();
const records = computed(() =>
  props.data.punches
    .filter((record) => record.deviceId === props.task.deviceId)
    .sort((a, b) => a.start.localeCompare(b.start)),
);
const nearest = computed(() =>
  nearestPunch(props.task, props.start, records.value),
);
const format = (value: string) =>
  new Date(value).toLocaleString(getLocale(), {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
async function reveal(open: boolean) {
  if (!open) return;
  await nextTick();
  const item = list.value?.querySelector<HTMLElement>('[data-nearest="true"]');
  if (item && list.value)
    list.value.scrollTop = item.offsetTop - list.value.offsetTop;
}
</script>
<style scoped>
.punch-trigger {
  display: inline-block;
  cursor: help;
}
.punch-list {
  max-height: 240px;
  overflow: auto;
  min-width: 220px;
}
.punch-list > div {
  padding: 8px;
  border-radius: 4px;
}
.nearest {
  background: var(--c-color-primary-light-1);
  outline: 1px solid rgb(var(--c-primary-6));
}
</style>
