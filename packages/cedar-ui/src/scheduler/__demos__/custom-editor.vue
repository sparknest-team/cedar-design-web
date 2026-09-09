<template>
  <c-checkbox v-model="reject">模拟接口拒绝保存</c-checkbox>
  <p>保留内置抽屉，替换全部表单内容；可看到新建/编辑标识及校验、接口错误。</p>
  <c-scheduler
    v-model="events"
    default-date="2026-09-09"
    default-mode="day"
    :before-change="beforeChange"
  >
    <template
      #editor="{
        action,
        event,
        save,
        remove,
        close,
        readonly,
        pending,
        errorMessage,
      }"
    >
      <h3>{{ action === "create" ? "新增工作计划" : "修改工作计划" }}</h3>
      <c-alert v-if="errorMessage" status="danger">{{ errorMessage }}</c-alert>
      <c-form :model="event" layout="vertical" @submit="save(event)">
        <c-form-item label="计划标题" required>
          <c-input v-model="event.title" :disabled="readonly || pending" />
        </c-form-item>
        <c-form-item label="开始时间">
          <c-date
            :model-value="event.start == null ? undefined : schedulerDate(event.start)"
            @update:model-value="event.start = $event"
            :show-time="!event.allDay"
            value-format="Date"
            :disabled="readonly || pending"
          />
        </c-form-item>
        <c-form-item label="结束时间（不含）">
          <c-date
            :model-value="event.end == null ? undefined : schedulerDate(event.end)"
            @update:model-value="event.end = $event"
            :show-time="!event.allDay"
            value-format="Date"
            :disabled="readonly || pending"
          />
        </c-form-item>
        <c-form-item label="验收说明">
          <c-textarea
            v-model="event.description"
            :disabled="readonly || pending"
          />
        </c-form-item>
        <c-space>
          <c-button :disabled="pending" @click="close">取消</c-button>
          <c-button
            v-if="action === 'edit' && !readonly"
            status="danger"
            :disabled="pending"
            @click="remove"
            >删除</c-button
          >
          <c-button
            v-if="!readonly"
            html-type="submit"
            status="primary"
            :loading="pending"
            >保存计划</c-button
          >
        </c-space>
      </c-form>
    </template>
  </c-scheduler>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { schedulerDate } from "@cedarjs/ui/scheduler/core";
import type { SchedulerEvent, SchedulerBeforeChange } from "@cedarjs/ui";
const events = ref<SchedulerEvent[]>([
  {
    id: "plan",
    title: "交付验收",
    start: "2026-09-09T09:00:00",
    end: "2026-09-09T10:00:00",
    description: "确认验收清单",
  },
]);
const reject = ref(false);
const beforeChange: SchedulerBeforeChange = async () => {
  if (reject.value) throw new Error("模拟接口拒绝");
  return true;
};
</script>
