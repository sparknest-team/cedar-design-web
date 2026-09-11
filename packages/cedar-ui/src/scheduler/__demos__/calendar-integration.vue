<template>
  <c-space direction="column" block>
    <c-alert
      >模拟服务端持有版本号：编辑保存延迟
      300ms，期间模拟远端更新会触发过期保护。导入/导出使用真实 ICS
      文本；打印生成独立文档，不打印整页组件文档。</c-alert
    >
    <c-space
      ><c-button @click="remote">模拟远端更新</c-button
      ><c-button @click="exportIcs">导出 ICS 文本</c-button
      ><c-button @click="importIcs">导入 ICS 文本</c-button
      ><c-button @click="print">打印日程</c-button
      ><c-tag>版本 {{ revision }}</c-tag></c-space
    >
    <c-alert v-if="error" status="danger">{{ error }}</c-alert>
    <c-textarea v-model="ical" placeholder="ICS 文本" :rows="4" />
    <c-scheduler
      v-model="events"
      default-date="2026-09-22"
      default-mode="week"
      :before-transaction="save"
      history
    />
  </c-space>
</template>
<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import {
  createSchedulerMemoryProvider,
  exportSchedulerICalendar,
  importSchedulerICalendar,
  createSchedulerPrintHtml,
} from "../adapters";
import type { SchedulerEvent, SchedulerTransactionContext } from "../core";
const events = ref<SchedulerEvent[]>([
  {
    id: "meeting",
    title: "团队会议",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T10:00:00",
  },
]);
const source = createSchedulerMemoryProvider(events.value),
  revision = ref(0),
  ical = ref(""),
  error = ref("");
const stop = source.subscribe!((snapshot, origin) => {
  if (origin === "editor") return;
  revision.value = snapshot.revision;
  events.value = snapshot.events;
});
onBeforeUnmount(stop);
async function save(context: SchedulerTransactionContext) {
  const expected = revision.value;
  await new Promise((resolve) => setTimeout(resolve, 300));
  const next = await source.commit(context.changes, expected, "editor");
  revision.value = next.revision;
}
async function remote() {
  try {
    await source.commit(
      [
        {
          type: "update",
          event: {
            ...events.value[0],
            title: `远端更新 ${revision.value + 1}`,
          },
        },
      ],
      revision.value,
      "remote",
    );
  } catch (cause) {
    error.value = String(cause);
  }
}
function exportIcs() {
  try {
    ical.value = exportSchedulerICalendar(events.value, {
      stamp: new Date(),
      name: "Cedar demo",
    });
    error.value = "";
  } catch (cause) {
    error.value = String(cause);
  }
}
async function importIcs() {
  try {
    const parsed = importSchedulerICalendar(ical.value, {
      timeZone: "Asia/Shanghai",
    });
    if (parsed.series.length)
      throw new Error("含重复系列，请先通过 RRULE 适配器展开");
    const existing = new Set(events.value.map((event) => event.id));
    await source.commit(
      parsed.events.map((event) => ({
        type: existing.has(event.id) ? "update" : "create",
        event,
      })),
      revision.value,
      "import",
    );
    error.value = "";
  } catch (cause) {
    error.value = String(cause);
  }
}
function print() {
  const page = window.open("", "_blank");
  if (!page) return;
  page.document.open();
  page.document.write(
    createSchedulerPrintHtml(events.value, { title: "团队日程" }),
  );
  page.document.close();
  page.focus();
  page.print();
}
</script>
