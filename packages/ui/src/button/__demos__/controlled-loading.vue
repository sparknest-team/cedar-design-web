<script setup lang="ts">
const inlineCopy = {
  clickSaveToStart: "点击保存，观察业务控制的 loading",
  saved: "保存完成",
  simulatedFailure: "模拟请求失败",
  save: "保存",
  failureRecovery: "失败与恢复",
  asyncClickHandlersOwnTheir: "click 支持 async 回调；业务通过 loading 展示等待，在 finally 中恢复。"
};

import { computed, ref } from "vue";
const saving = ref(false);
const failing = ref(false);
const messageKey = ref<keyof typeof inlineCopy>("clickSaveToStart");
const message = computed(() => inlineCopy[messageKey.value]);
const delay = () => new Promise((resolve) => setTimeout(resolve, 800));
async function save() {
  if (saving.value) return;
  saving.value = true;
  try {
    await delay();
    messageKey.value = "saved";
  } finally {
    saving.value = false;
  }
}
async function recover() {
  if (failing.value) return;
  failing.value = true;
  try {
    await delay();
    throw new Error(inlineCopy.simulatedFailure);
  } catch {
    messageKey.value = "simulatedFailure";
  } finally {
    failing.value = false;
  }
}
</script>
<template>
  <c-space direction="column" :size="12">
    <p>click 支持 async 回调；业务通过 loading 展示等待，在 finally 中恢复。</p>
    <c-space wrap :size="12">
      <c-button :loading="saving" @click="save">保存</c-button>
      <c-button :loading="failing" @click="recover">失败与恢复</c-button>
    </c-space>
    <p aria-live="polite">{{ message }}</p>
  </c-space>
</template>
