<script setup lang="ts">
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'
import { t } from './locale'

const lastAction = ref('')
const handleSelect = (value: unknown, option: { label?: unknown }) => {
  lastAction.value = String(value)
  Message.info(String(option.label))
}
</script>

<template>
  <c-space direction="column" align="flex-start">
    <c-split-button
      status="primary"
      placement="bottom-start"
      :offset-y="8"
      :popup-max-height="160"
      :hide-on-select="false"
      @click="lastAction = 'publish'"
      @select="handleSelect"
    >
      {{ t('choose') }}
      <template #content>
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
    <span aria-live="polite">{{ t('lastAction') }}: {{ lastAction || t('none') }}</span>
    <span>{{ t('popupHint') }}</span>
  </c-space>
</template>
