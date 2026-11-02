<script setup lang="ts">
import { ref } from "vue";
import type { AutoCompleteTriggerOptions } from "@cedar-design/ui";
const disabled = ref(false);
const triggerOptions: AutoCompleteTriggerOptions = {
  placement: "top-start",
  popupOffset: 8,
  popupContainer: false,
};
const options = [
  { value: "USER_A", label: "Apple" },
  { value: "USER_B", label: "Banana" },
];
</script>
<template>
  <c-space direction="column" fill>
    <c-button @click="disabled = !disabled">{{
      disabled ? "启用输入" : "禁用输入"
    }}</c-button>
    <c-auto-complete
      edit-mode="direct"
      :disabled="disabled"
      :should-open="() => true"
      :options="options"
      :trigger-props="triggerOptions"
      aria-label="透传配置示例"
    />
    <p role="status">
      顶层 disabled：{{ disabled }}；聚焦输入框查看向上展开的候选。
    </p>
  </c-space>
</template>
