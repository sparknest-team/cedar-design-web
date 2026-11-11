<template>
  <p>
    关闭内置编辑器，统一接收工具栏、日期格、卡片拖入及已有日程请求，使用独立
    Dialog。取消不写入，保存失败保留表单。
  </p>
  <c-checkbox v-model="reject">下一次模拟接口提交失败</c-checkbox>
  <c-scheduler
    ref="scheduler"
    v-model="events"
    :editable="false"
    default-date="2026-09-09"
    default-mode="day"
    :before-change="beforeChange"
    @editor-request="openEditor"
    @change-error="showError"
  >
    <template #sidebar-extra="{ startDrag, cancelDrag, disabled }">
      <c-button
        :draggable="!disabled"
        :disabled="disabled"
        @dragstart="startDrag(card, $event)"
        @dragend="cancelDrag"
        >拖入：现场检查 · 60 分钟</c-button
      >
    </template>
  </c-scheduler>
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
            :disabled="request?.readonly || saving"
        /></c-form-item>
        <c-form-item label="开始"
          ><c-date
            :model-value="draft.start == null ? undefined : schedulerDate(draft.start)"
            @update:model-value="draft.start = $event"
            :show-time="!draft.allDay"
            value-format="Date"
            :disabled="request?.readonly || saving"
        /></c-form-item>
        <c-form-item label="结束（不含）"
          ><c-date
            :model-value="draft.end == null ? undefined : schedulerDate(draft.end)"
            @update:model-value="draft.end = $event"
            :show-time="!draft.allDay"
            value-format="Date"
            :disabled="request?.readonly || saving"
        /></c-form-item>
        <c-form-item label="工作说明"
          ><c-textarea
            v-model="draft.description"
            :disabled="request?.readonly || saving"
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
import { ref } from "vue";
import { cloneSchedulerEvent, schedulerDate } from "@cedar-design/ui-vue/scheduler/core";
import type {
  SchedulerInstance,
  SchedulerEvent,
  SchedulerEditorRequest,
  SchedulerEventTemplate,
  SchedulerBeforeChange,
} from "@cedar-design/ui-vue";
const scheduler = ref<SchedulerInstance>();
const events = ref<SchedulerEvent[]>([
  {
    id: "inspection",
    title: "设备例行检查",
    start: "2026-09-09T10:00:00",
    end: "2026-09-09T11:00:00",
  },
]);
const card: SchedulerEventTemplate = {
  title: "现场检查",
  duration: 60,
  description: "核对运行参数",
};
const request = ref<SchedulerEditorRequest>();
const draft = ref<SchedulerEvent>();
const open = ref(false);
const saving = ref(false);
const reject = ref(false);
const errorMessage = ref("");
let snapshot: string | undefined;
function openEditor(value: SchedulerEditorRequest) {
  if (open.value || saving.value) return;
  request.value = value;
  draft.value = cloneSchedulerEvent(value.event);
  snapshot = JSON.stringify(
    events.value.find((item) => item.id === value.event.id),
  );
  errorMessage.value = "";
  open.value = true;
}
const beforeChange: SchedulerBeforeChange = async () => {
  if (reject.value) {
    reject.value = false;
    throw new Error("模拟接口提交失败，请保留草稿直接重试");
  }
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
    if (success) open.value = false;
    else if (!errorMessage.value)
      errorMessage.value = "保存被取消或当前不可提交，请重试。";
  } finally {
    saving.value = false;
  }
}
</script>
