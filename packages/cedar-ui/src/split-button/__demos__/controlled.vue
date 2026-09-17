<script setup lang="ts">
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'

const publish = () => {
  Message.info('发布成功')
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
const open = ref(false)
</script>

<template>
  <c-space direction="column" align="flex-start">
    <c-space wrap>
      <c-button @click.stop="open = true">展开菜单</c-button>
      <c-button @click.stop="open = false">关闭菜单</c-button>
    </c-space>
    <c-split-button v-model:open="open" status="primary" @click="publish" @select="handleSelect">
      发布

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
    <span aria-live="polite">{{ open ? '已展开' : '已关闭' }}</span>
  </c-space>
</template>
