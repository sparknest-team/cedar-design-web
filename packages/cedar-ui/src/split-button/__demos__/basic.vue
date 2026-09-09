<script setup lang="ts">
import { Message } from '@cedarjs/ui'
import { t } from './locale'

const publish = () => {
  Message.info(t('published'))
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
</script>

<template>
  <c-split-button status="primary" placement="bottom-end" @click="publish" @select="handleSelect">
    {{ t('publish') }}

    <template #content>
      <c-menu-option :label="t('saveNow')" value="draft" />
      <c-menu-option :label="t('saveAndPublish')" value="publish" />
      <c-menu-option :label="t('unavailable')" value="restricted" disabled />
    </template>
  </c-split-button>
</template>
