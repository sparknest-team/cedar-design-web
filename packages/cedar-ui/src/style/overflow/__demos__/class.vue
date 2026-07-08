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
    title: 'Effective CSS',
    dataIndex: 'effective',
    render: (data) => {
      return h('div', {
        innerHTML: `<div>${data.record.effective.replaceAll('\n', '<br/>')}</div>`, // 等效于 v-html
      })
    },
  },
]
const data = [
  {
    class: 'overflow-hidden',
    properties: 'overflow: hidden !important;',
    effective: 'overflow: hidden !important;',
  },
  {
    class: 'overflow-x-hidden',
    properties: 'overflow-x: hidden !important;',
    effective: 'overflow-x: hidden !important;',
  },
  {
    class: 'overflow-y-hidden',
    properties: 'overflow-y: hidden !important;',
    effective: 'overflow-y: hidden !important;',
  },
  {
    class: 'overflow-auto',
    properties: 'overflow: auto !important;',
    effective: 'overflow: auto !important;',
  },
  {
    class: 'overflow-x-auto',
    properties: 'overflow-x: auto !important;',
    effective: 'overflow-x: auto !important;',
  },
  {
    class: 'overflow-y-auto',
    properties: 'overflow-y: auto !important;',
    effective: 'overflow-y: auto !important;',
  },
  {
    class: 'overflow-visible',
    properties: 'overflow: visible !important;',
    effective: 'overflow: visible !important;',
  },
  {
    class: 'overflow-x-visible',
    properties: 'overflow-x: visible !important;',
    effective: 'overflow-x: visible !important;',
  },
  {
    class: 'overflow-y-visible',
    properties: 'overflow-y: visible !important;',
    effective: 'overflow-y: visible !important;',
  },
  {
    class: 'overflow-scroll',
    properties: 'overflow: scroll !important;',
    effective: 'overflow: scroll !important;',
  },
  {
    class: 'overflow-x-scroll',
    properties: 'overflow-x: scroll !important;',
    effective: 'overflow-x: scroll !important;',
  },
  {
    class: 'overflow-y-scroll',
    properties: 'overflow-y: scroll !important;',
    effective: 'overflow-y: scroll !important;',
  },
  {
    class: 'text-ellipsis',
    properties:
      'overflow: hidden !important;\n    white-space: nowrap !important;\n    text-overflow: ellipsis !important;\n    word-break: break-word !important',
    effective:
      'overflow: hidden !important;\n    white-space: nowrap !important;\n    text-overflow: ellipsis !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-0',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 0 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 0 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-1',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 1 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 1 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-2',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 2 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 2 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-3',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 3 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 3 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-4',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 4 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 4 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
  {
    class: 'text-ellipsis-5',
    properties:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 5 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
    effective:
      'display: -webkit-box !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    -webkit-line-clamp: 5 !important;\n    -webkit-box-orient: vertical !important;\n    word-break: break-word !important',
  },
]
</script>

<style scoped lang="scss"></style>
