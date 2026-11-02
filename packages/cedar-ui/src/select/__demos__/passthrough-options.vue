<script setup lang="ts">
import { ref } from "vue";
import type { SelectTriggerOptions } from "@cedar-design/ui";
const open = ref(false);
const triggerOptions: SelectTriggerOptions = {
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
    <c-button @click="open = !open">{{
      open ? "关闭面板" : "打开面板"
    }}</c-button>
    <c-select
      edit-mode="direct"
      v-model:open="open"
      :options="options"
      :trigger-props="triggerOptions"
      aria-label="透传配置示例"
    />
    <p role="status">顶层 open：{{ open }}；嵌套配置：向上展开并调整偏移。</p>
  </c-space>
</template>
