<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("splitButtonAsyncActionInline");

import { ref } from "vue";
import { Message } from "@cedar-design/ui-vue";

const completed = ref(0);
const publishing = ref(false);
const publish = async () => {
  if (publishing.value) return;
  publishing.value = true;
  try {
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    completed.value += 1;
    Message.info(inlineCopy.value.published);
  } finally {
    publishing.value = false;
  }
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
</script>

<template>
  <c-space direction="column" align="flex-start">
    <c-split-button
      :button-props="{ loading: publishing }"
      @click="publish"
      @select="handleSelect"
    >
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
