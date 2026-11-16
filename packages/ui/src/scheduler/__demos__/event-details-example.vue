<template>
  <c-alert
    >{{
      preview
        ? "单击日程或空白格打开 Popover，点击高级编辑进入完整窗口；工具栏新增直接弹窗。"
        : "单击堆叠日程直接打开编辑窗口，无需双击。"
    }}
    保存经过 Scheduler 校验；取消不修改日程。</c-alert
  >
  <c-checkbox v-model="readonly">只读查看</c-checkbox>
  <c-checkbox v-model="reject">模拟接口保存失败</c-checkbox>
  <div
    @pointerdown.capture="previewId = undefined"
    @click.capture="captureCell"
  >
    <c-scheduler
      ref="scheduler"
      v-model="events"
      :editable="false"
      default-date="2026-09-22"
      default-mode="week"
      :modes="['week']"
      event-layout="stack"
      :show-sidebar="false"
      :readonly="readonly"
      :preview-event="
        request?.action === 'create' && (cellOpen || open) ? draft : undefined
      "
      @range-change="closePreviews"
      :before-change="beforeChange"
      @editor-request="activate"
      @change-error="showError"
    >
      <template v-if="preview" #event="{ event }">
        <EventSummaryPopover
          :open="previewId === event.id"
          :title="event.title"
          @update:open="
            (value) => {
              if (!value && previewId === event.id) previewId = undefined;
            }
          "
          @click-outside="previewId === event.id && (previewId = undefined)"
        >
          <span>{{ event.title }}</span>
          <template #content>
            <c-space direction="column" block>
              <c-tag>{{
                readonly || event.readonly ? "只读日程" : "已安排"
              }}</c-tag>
              <span>{{ timeRange(event) }}</span>
              <span>{{ event.description || "暂无工作说明" }}</span>
              <span>站点：上海站 · 负责人：林夏</span>
              <c-space>
                <c-button status="primary" @click.stop="advanced(event)">{{
                  readonly || event.readonly ? "查看完整详情" : "高级编辑"
                }}</c-button>
                <c-button @click.stop="previewId = undefined"
                  >关闭摘要</c-button
                >
              </c-space>
            </c-space>
          </template>
        </EventSummaryPopover>
      </template>
    </c-scheduler>
  </div>
  <EventSummaryPopover
    v-if="preview && draft && request?.action === 'create'"
    :open="cellOpen"
    :target="cellAnchor"
    title="新建日程"
    @update:open="
      (value) => {
        if (!saving) cellOpen = value;
      }
    "
    @click-outside="!saving && (cellOpen = false)"
  >
    <template #content>
      <c-form :model="draft" layout="vertical" @submit="submit()">
        <c-alert v-if="errorMessage" status="danger">{{
          errorMessage
        }}</c-alert>
        <c-form-item label="任务名称"
          ><c-input v-model="draft.title" :disabled="saving || readonly"
        /></c-form-item>
        <p>{{ timeRange(draft) }}</p>
        <c-space>
          <c-button
            :disabled="saving"
            @click="
              cellOpen = false;
              open = true;
            "
            >高级编辑</c-button
          >
          <c-button :disabled="saving" @click="cellOpen = false"
            >取消新增</c-button
          >
          <c-button
            status="primary"
            html-type="submit"
            :loading="saving"
            :disabled="readonly"
            >创建日程</c-button
          >
        </c-space>
      </c-form>
    </template>
  </EventSummaryPopover>
  <c-dialog
    v-model:open="open"
    :title="request?.action === 'create' ? '业务新增窗口' : '业务详情窗口'"
    :footer="false"
    :closable="!saving"
    :overlay-closable="!saving"
    :esc-to-close="!saving"
  >
    <template v-if="draft">
      <p>请求来源：{{ request?.source }}；业务页面也可接收相同请求。</p>
      <c-alert v-if="errorMessage" status="danger">{{ errorMessage }}</c-alert>
      <c-form :model="draft" layout="vertical" @submit="submit()">
        <c-form-item label="任务名称"
          ><c-input
            v-model="draft.title"
            :disabled="request?.readonly || readonly || saving"
        /></c-form-item>
        <c-form-item label="开始"
          ><c-date
            :model-value="
              draft.start == null ? undefined : schedulerDate(draft.start)
            "
            @update:model-value="draft.start = $event"
            :show-time="!draft.allDay"
            value-format="Date"
            :disabled="request?.readonly || readonly || saving"
        /></c-form-item>
        <c-form-item label="结束（不含）"
          ><c-date
            :model-value="
              draft.end == null ? undefined : schedulerDate(draft.end)
            "
            @update:model-value="draft.end = $event"
            :show-time="!draft.allDay"
            value-format="Date"
            :disabled="request?.readonly || readonly || saving"
        /></c-form-item>
        <c-form-item label="工作说明"
          ><c-textarea
            v-model="draft.description"
            :disabled="request?.readonly || readonly || saving"
        /></c-form-item>
        <c-space>
          <c-button :disabled="saving" @click="open = false">取消</c-button>
          <c-button
            v-if="request?.action === 'edit' && !request.readonly"
            status="danger"
            :disabled="saving"
            @click="submit(true)"
            >删除</c-button
          >
          <c-button
            v-if="!request?.readonly"
            status="primary"
            html-type="submit"
            :loading="saving"
            >确认保存</c-button
          >
        </c-space>
      </c-form>
    </template>
  </c-dialog>
</template>
<script setup lang="ts">
import { formatDemoDateTime, formatDemoTime } from "../../__demos__/locale";
import { ref, shallowRef, watch } from "vue";
import EventSummaryPopover from "./event-summary-popover.vue";
import { cloneSchedulerEvent, schedulerDate } from "../core";
import type {
  SchedulerInstance,
  SchedulerEvent,
  SchedulerEditorRequest,
  SchedulerBeforeChange,
} from "../index";
const scheduler = ref<SchedulerInstance>();
const props = defineProps<{ preview?: boolean }>();
const readonly = ref(false);
const previewId = ref<string>();
const cellOpen = ref(false);
const cellAnchor = shallowRef<HTMLElement>();
function captureCell(event: MouseEvent) {
  cellAnchor.value =
    (event.target as Element)?.closest<HTMLElement>("[data-scheduler-date]") ??
    undefined;
}
function closePreviews() {
  previewId.value = undefined;
  cellOpen.value = false;
}
const events = ref<SchedulerEvent[]>([
  {
    id: "inspection",
    title: "站点巡检",
    start: "2026-09-22T09:00:00",
    end: "2026-09-22T12:00:00",
    description: "核对站点运行参数，记录设备状态并安排复查。",
  },
  {
    id: "maintenance",
    title: "设备维护",
    start: "2026-09-22T09:30:00",
    end: "2026-09-22T11:30:00",
    description: "检查维护工单，与当班人员确认停机窗口。",
  },
  {
    id: "training",
    title: "人员培训",
    start: "2026-09-22T10:00:00",
    end: "2026-09-22T12:30:00",
    description: "培训与现场巡检部分重叠，请确认人员安排。",
  },
]);
function timeRange(event: SchedulerEvent) {
  return event.start == null
    ? "未排期"
    : `${formatDemoDateTime(schedulerDate(event.start))} — ${formatDemoTime(schedulerDate(event.end!), { hour: "2-digit", minute: "2-digit" })}`;
}
function activate(value: SchedulerEditorRequest) {
  closePreviews();
  if (props.preview && value.action === "edit") {
    previewId.value = value.event.id;
    return;
  }
  if (
    props.preview &&
    value.action === "create" &&
    value.source === "cell" &&
    cellAnchor.value
  ) {
    openEditor(value, false);
    cellOpen.value = true;
    return;
  }
  openEditor(value);
}
function advanced(event: SchedulerEvent) {
  previewId.value = undefined;
  openEditor({
    action: "edit",
    source: "event",
    event,
    readonly: readonly.value || !!event.readonly,
  });
}
watch(readonly, () => {
  closePreviews();
  open.value = false;
});
const request = ref<SchedulerEditorRequest>();
const draft = ref<SchedulerEvent>();
const open = ref(false);
const saving = ref(false);
const reject = ref(false);
const errorMessage = ref("");
let snapshot: string | undefined;
function openEditor(value: SchedulerEditorRequest, showDialog = true) {
  if (open.value || saving.value) return;
  request.value = value;
  draft.value = cloneSchedulerEvent(value.event);
  snapshot = JSON.stringify(
    events.value.find((item) => item.id === value.event.id),
  );
  errorMessage.value = "";
  open.value = showDialog;
}
const beforeChange: SchedulerBeforeChange = async () => {
  if (reject.value) throw new Error("模拟接口保存失败，请关闭模拟开关后重试");
  return true;
};
function showError(error: unknown) {
  errorMessage.value = error instanceof Error ? error.message : "保存失败";
}
async function submit(remove = false) {
  if (
    !draft.value ||
    !request.value ||
    request.value.readonly ||
    readonly.value ||
    saving.value ||
    !scheduler.value
  )
    return;
  if (
    draft.value.id !== request.value.event.id ||
    JSON.stringify(events.value.find((item) => item.id === draft.value!.id)) !==
      snapshot
  ) {
    errorMessage.value = "原日程已变化，请关闭并重新打开。";
    return;
  }
  saving.value = true;
  errorMessage.value = "";
  try {
    const success = await scheduler.value.change({
      type: remove
        ? "remove"
        : request.value.action === "create"
          ? "create"
          : "update",
      event: cloneSchedulerEvent(draft.value),
    });
    if (success) {
      open.value = false;
      cellOpen.value = false;
    } else if (!errorMessage.value)
      errorMessage.value = "保存被取消或当前不可提交，请重试。";
  } finally {
    saving.value = false;
  }
}
</script>
