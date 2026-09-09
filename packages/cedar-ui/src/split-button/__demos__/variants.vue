<script setup lang="ts">
import { Message } from '@cedarjs/ui'
import { t } from './locale'

const publish = () => {
  Message.info(t('published'))
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
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
