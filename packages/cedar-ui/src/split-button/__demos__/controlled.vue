<script setup lang="ts">
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'
import { t } from './locale'

const publish = () => {
  Message.info(t('published'))
}
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label))
}
const open = ref(false)
</script>

<template>
  <c-space direction="column" align="flex-start">
    <c-space wrap>
      <c-button @click.stop="open = true">{{ t('openMenu') }}</c-button>
      <c-button @click.stop="open = false">{{ t('closeMenu') }}</c-button>
    </c-space>
    <c-split-button v-model:open="open" status="primary" @click="publish" @select="handleSelect">
      {{ t('publish') }}

      <template #content>
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
    <span aria-live="polite">{{ open ? t('opened') : t('closed') }}</span>
  </c-space>
</template>
