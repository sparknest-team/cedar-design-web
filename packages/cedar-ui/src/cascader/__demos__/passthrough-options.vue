<script setup lang="ts">
import { ref } from "vue";
import type { CascaderTriggerOptions } from "@cedar-design/ui";
const open = ref(false);
const triggerOptions: CascaderTriggerOptions = {
  placement: "top-start",
  popupOffset: 8,
  popupContainer: false,
};
const options = [
  {
    value: "fruit",
    label: "水果",
    children: [{ value: "apple", label: "Apple" }],
  },
];
</script>
<template>
  <c-space direction="column" fill>
    <c-button @click="open = !open">{{
      open ? "关闭面板" : "打开面板"
    }}</c-button>
    <c-cascader
      edit-mode="direct"
      v-model:open="open"
      :options="options"
      :trigger-props="triggerOptions"
      aria-label="透传配置示例"
    />
    <p role="status">顶层 open：{{ open }}；嵌套配置：向上展开并调整偏移。</p>
  </c-space>
</template>
