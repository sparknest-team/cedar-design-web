<script setup lang="ts">
import { ref } from "vue";
import type { DatePopupOptions } from "@cedar-design/ui-vue";
const open = ref(false);
const popupOptions: DatePopupOptions = {
  placement: "top-start",
  popupTranslate: [0, -8],
  popupContainer: false,
};
</script>
<template>
  <c-space direction="column" fill>
    <c-button @click="open = !open">{{
      open ? "关闭面板" : "打开面板"
    }}</c-button>
    <c-date
      edit-mode="direct"
      v-model:open="open"
      :popup-props="popupOptions"
      aria-label="透传配置示例"
    />
    <p role="status">顶层 open：{{ open }}；嵌套配置：向上展开并调整偏移。</p>
  </c-space>
</template>
