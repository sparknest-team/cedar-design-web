<template>
  <section class="async-form-demo" @submit.capture="beginSubmit">
    <p>本地模拟异步校验：用户名只能是 admin，延迟 600ms，不访问外部接口。</p>
    <c-form
      ref="formRef"
      :model="form"
      @submit="handleSubmit"
      @reset="handleReset"
    >
      <c-form-item
        field="name"
        label="用户名"
        :label-attrs="{ for: `${demoId}-name` }"
        :rules="rules"
        feedback
      >
        <c-input
          :id="`${demoId}-name`"
          v-model="form.name"
          placeholder="请输入 admin"
        />
      </c-form-item>
      <c-form-item
        field="post"
        label="岗位"
        :label-attrs="{ for: `${demoId}-post` }"
      >
        <c-input
          :id="`${demoId}-post`"
          v-model="form.post"
          placeholder="请输入岗位"
        />
      </c-form-item>
      <c-form-item field="isRead">
        <c-checkbox v-model="form.isRead">已阅读说明</c-checkbox>
      </c-form-item>
      <c-form-item>
        <c-space>
          <c-button html-type="submit" status="primary" :loading="submitting"
            >提交</c-button
          >
          <c-button html-type="reset">重置</c-button>
          <c-button @click="setStatus">模拟服务端错误</c-button>
        </c-space>
      </c-form-item>
    </c-form>
    <p role="status">提交结果：{{ result }}；活动校验：{{ pendingCount }}</p>
    <ModelOutput>{{ form }}</ModelOutput>
  </section>
</template>

<script setup lang="ts">
import ModelOutput from '../__demo-utils__/ModelOutput.vue'

import { onBeforeUnmount, onDeactivated, reactive, ref, useId } from "vue";
import type { FormInstance, FieldRule } from "@cedarjs/ui";

const formRef = ref<FormInstance>();
const demoId = useId();
const form = reactive({ name: "", post: "", isRead: false });
const result = ref("尚未提交");
const submitting = ref(false);
const pendingCount = ref(0);
const pending = new Map<ReturnType<typeof setTimeout>, () => void>();
let generation = 0;
let submittedGeneration = -1;
const rules: FieldRule[] = [
  {
    validator: (value, callback) =>
      new Promise<void>((resolve) => {
        const current = generation;
        const timer = setTimeout(() => {
          pending.delete(timer);
          pendingCount.value = pending.size;
          if (current === generation && value !== "admin")
            callback("用户名必须是 admin");
          resolve();
        }, 600);
        pending.set(timer, resolve);
        pendingCount.value = pending.size;
      }),
  },
];

function beginSubmit() {
  submittedGeneration = generation;
  submitting.value = true;
  result.value = "校验中";
}
function cancelPending() {
  generation++;
  pending.forEach((resolve, timer) => {
    clearTimeout(timer);
    resolve();
  });
  pending.clear();
  pendingCount.value = 0;
  submitting.value = false;
}
function handleSubmit({ errors }: { errors?: unknown }) {
  if (submittedGeneration !== generation) return;
  submitting.value = false;
  result.value = errors ? "未通过" : "通过";
}
function handleReset() {
  cancelPending();
  result.value = "已重置";
}
function setStatus() {
  formRef.value?.setFields({
    name: { status: "error", message: "模拟服务端用户名错误" },
    post: { status: "error", message: "模拟服务端岗位错误" },
  });
  result.value = "服务端错误已展示";
}
onBeforeUnmount(cancelPending);
onDeactivated(cancelPending);
</script>
