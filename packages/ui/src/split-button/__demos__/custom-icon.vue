<script setup lang="ts">
import { Message } from "@cedar-design/ui-vue";

const publish = () => {
  Message.info("发布成功");
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
</script>

<template>
  <c-split-button @click="publish" @select="handleSelect">
    发布
    <template #icon="{ open }">
      <c-icon-menu-down
        :style="{
          transform: open ? 'rotate(180deg)' : undefined,
          transition: 'transform 0.2s',
        }"
      />
    </template>
    <template #content>
      <c-menu-option label="保存草稿" value="draft" />
      <c-menu-option label="保存并发布" value="publish" />
      <c-menu-option label="暂无权限" value="restricted" disabled />
    </template>
  </c-split-button>
</template>
