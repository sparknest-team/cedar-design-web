<script setup lang="ts">
import { ref } from "vue";
import type {
  TreeSelectTriggerOptions,
  TreeSelectTreeOptions,
} from "@cedar-design/ui";
const open = ref(false);
const triggerOptions: TreeSelectTriggerOptions = {
  placement: "top-start",
  popupOffset: 8,
};
const data = [
  {
    value: "fruit",
    label: "水果",
    children: [{ value: "apple", label: "Apple" }],
  },
];
const treeOptions: TreeSelectTreeOptions = {
  showLine: true,
  defaultExpandAll: false,
};
</script>
<template>
  <c-space direction="column" fill>
    <c-button @click="open = !open">{{
      open ? "关闭面板" : "打开面板"
    }}</c-button>
    <c-tree-select
      edit-mode="direct"
      v-model:open="open"
      :data="data"
      :tree-props="treeOptions"
      :trigger-props="triggerOptions"
      aria-label="透传配置示例"
    />
    <p role="status">顶层 open：{{ open }}；嵌套配置：向上展开并调整偏移。</p>
  </c-space>
</template>
