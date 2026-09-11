<template>
  <c-space direction="column" block>
    <c-alert
      >翻页按可见范围请求；返回已访问日期命中 30
      秒缓存。可模拟失败后重试，也可连续切换日期，验证慢响应不会覆盖最新页面。</c-alert
    >
    <c-space wrap>
      <c-button @click="refresh()">刷新 / 重试</c-button>
      <c-button @click="jump(1)">下一天</c-button>
      <c-button @click="jump(-1)">上一天</c-button>
      <c-checkbox v-model="fail">模拟加载失败</c-checkbox>
      <c-checkbox v-model="outOfOrder">模拟乱序响应</c-checkbox>
    </c-space>
    <c-space wrap>
      <c-tag>请求 {{ requests }} 次</c-tag>
      <c-tag>{{
        loading
          ? "加载中"
          : error
            ? "加载失败，请重试"
            : `已加载 ${events.length} 项`
      }}</c-tag>
      <c-tag>{{ status }}</c-tag>
    </c-space>
    <c-scheduler
      v-model="events"
      v-model:date="date"
      default-mode="day"
      :loading="loading"
      :readonly="!!error"
      :before-transaction="persist"
      @range-change="range = $event"
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useSchedulerDataSource } from "../use-data-source";
import {
  applySchedulerTransaction,
  cloneSchedulerEvent,
  isSchedulerEventInRange,
  schedulerDate,
} from "../core";
import type { SchedulerDate, SchedulerEvent, SchedulerRange } from "../core";
import type { SchedulerBeforeTransaction } from "../props";
const date = ref<SchedulerDate>("2026-09-09");
const range = ref<SchedulerRange>();
const fail = ref(false);
const outOfOrder = ref(false);
const requests = ref(0);
const status = ref("编辑日程会保存到模拟服务端");
let database: SchedulerEvent[] = Array.from({ length: 90 }, (_, index) => ({
  id: `remote-${index}`,
  title: `远程计划 ${index + 1}`,
  start: new Date(2026, 7, 15 + index, 9),
  end: new Date(2026, 7, 15 + index, 10),
}));
const { events, loading, error, refresh } = useSchedulerDataSource({
  range,
  requestEvents: async (query) => {
    const sequence = ++requests.value;
    const shouldFail = fail.value;
    const ignoreAbort = outOfOrder.value;
    const result = database
      .filter((event) => isSchedulerEventInRange(event, query))
      .map(cloneSchedulerEvent);
    await new Promise<void>((resolve, reject) => {
      const abort = () => {
        clearTimeout(timer);
        reject(new Error("Aborted"));
      };
      const timer = setTimeout(
        () => {
          query.signal.removeEventListener("abort", abort);
          resolve();
        },
        ignoreAbort ? (sequence % 2 ? 1800 : 200) : 450,
      );
      if (!ignoreAbort)
        query.signal.addEventListener("abort", abort, { once: true });
    });
    if (shouldFail) throw new Error("模拟接口失败");
    return result;
  },
});
function jump(offset: number) {
  const next = schedulerDate(date.value);
  next.setDate(next.getDate() + offset);
  date.value = next;
}
const persist: SchedulerBeforeTransaction = async (context) => {
  // Send the delta to the backend, never replace the full database with a loaded window.
  database = applySchedulerTransaction(database, context.changes);
  status.value = `已保存 ${context.changes.length} 项变更；查询缓存随 v-model 更新失效`;
};
</script>
