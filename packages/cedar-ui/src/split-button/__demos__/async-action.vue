<script setup lang="ts">
import { ref } from "vue";
import { Message } from "@cedar-design/ui";

const completed = ref(0);
const publish = async () => {
  await new Promise<void>((resolve) => setTimeout(resolve, 800));
  completed.value += 1;
  Message.info("发布成功");
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
</script>

<template>
  <c-space direction="column" align="flex-start">
    <c-split-button auto-loading @click="publish" @select="handleSelect">
      发布

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
    <span aria-live="polite">完成次数: {{ completed }}</span>
  </c-space>
</template>
