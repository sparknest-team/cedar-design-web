<template>
  <c-space direction="column" fill size="lg">
    <c-table :columns="columns" :data="data" :pagination="false" />
  </c-space>
</template>
<script setup lang="ts">
import { h } from 'vue'
import { Message } from '@cedar/ui'

const columns = [
  {
    title: 'Class',
    dataIndex: 'class',
    render: (data) => {
      return h(
        'div',
        {
          style: {
            cursor: 'pointer',
          },
          onClick: () => {
            navigator.clipboard
              .writeText(data.record.class)
              .then(() => {
                Message.success('copy success')
              })
              .catch((err) => {
                Message.fail('copy fail')
              })
          },
        },
        data.record.class,
      )
    },
  },
  {
    title: 'Properties/Effective CSS',
    dataIndex: 'properties',
    render: (data) => {
      return [
        h('div', {
          innerHTML: `<div>${data.record.properties.replaceAll('\n', '<br/>')}</div>`, // 等效于 v-html
        }),
        h('div', {
          innerHTML: `<div>${data.record.effective.replaceAll('\n', '<br/>')}</div>`, // 等效于 v-html
        }),
      ]
    },
  },
]
const data = [
  {
    class: 'rounded',
    properties: 'border-radius: var(--rounded) !important',
    effective: 'border-radius: 8px !important;',
  },
  {
    class: 'rounded-none',
    properties: 'border-radius: var(--rounded-none) !important',
    effective: 'border-radius: 0px !important;',
  },
  {
    class: 'rounded-xs',
    properties: 'border-radius: var(--rounded-xs) !important',
    effective: 'border-radius: 2px !important;',
  },
  {
    class: 'rounded-sm',
    properties: 'border-radius: var(--rounded-sm) !important',
    effective: 'border-radius: 4px !important;',
  },
  {
    class: 'rounded-md',
    properties: 'border-radius: var(--rounded-md) !important',
    effective: 'border-radius: 8px !important;',
  },
  {
    class: 'rounded-lg',
    properties: 'border-radius: var(--rounded-lg) !important',
    effective: 'border-radius: 12px !important;',
  },
  {
    class: 'rounded-pill',
    properties: 'border-radius: var(--rounded-pill) !important',
    effective: 'border-radius: 9999px !important;',
  },
  {
    class: 'circle',
    properties: 'border-radius: var(--circle) !important',
    effective: 'border-radius: 50% !important;',
  },
]
</script>

<style scoped lang="scss"></style>
