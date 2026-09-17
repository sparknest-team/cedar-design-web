<script setup lang="ts">
import { Message } from '@cedarjs/ui'

const publish = () => {
  Message.info('发布成功')
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
const variants = ['default', 'outline', 'tonal', 'text'] as const
</script>

<template>
  <c-space wrap>
    <c-split-button
      v-for="variant in variants"
      :key="variant"
      :variant="variant"
      status="primary"
      @click="publish"
      @select="handleSelect"
    >
      {{ variant }}

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
