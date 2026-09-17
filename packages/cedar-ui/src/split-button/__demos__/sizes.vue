<script setup lang="ts">
import { Message } from '@cedarjs/ui'

const publish = () => {
  Message.info('发布成功')
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <c-space wrap align="center">
    <c-split-button
      v-for="size in sizes"
      :key="size"
      :size="size"
      status="primary"
      @click="publish"
      @select="handleSelect"
    >
      {{ size }}

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
