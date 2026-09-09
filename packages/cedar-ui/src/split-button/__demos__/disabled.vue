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
  <c-space wrap>
    <c-split-button
      disabled
      status="primary"
      :button-props="{ disabled: false }"
      :trigger-button-props="{ disabled: false }"
      @click="publish"
      @select="handleSelect"
    >
      {{ t('allDisabled') }}

      <template #content>
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
    <c-split-button status="primary" :button-props="{ disabled: true }" @click="publish" @select="handleSelect">
      {{ t('mainDisabled') }}

      <template #content>
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
    <c-split-button
      status="primary"
      :trigger-button-props="{ disabled: true }"
      @click="publish"
      @select="handleSelect"
    >
      {{ t('triggerDisabled') }}

      <template #content>
        <c-menu-option :label="t('saveNow')" value="draft" />
        <c-menu-option :label="t('saveAndPublish')" value="publish" />
        <c-menu-option :label="t('unavailable')" value="restricted" disabled />
      </template>
    </c-split-button>
  </c-space>
</template>
