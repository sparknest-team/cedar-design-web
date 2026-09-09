<script setup lang="ts">
import { Message } from '@cedarjs/ui'
import { t } from './locale'

const publish = () => {
  Message.info(t('published'))
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
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
