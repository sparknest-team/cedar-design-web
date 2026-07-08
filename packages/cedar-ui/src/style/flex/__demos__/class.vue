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
    class: 'flex',
    properties: 'display: flex !important',
    effective: 'display: flex !important',
  },
  {
    class: 'flex-row',
    properties: 'flex-direction: row !important;',
    effective: 'flex-direction: row !important;',
  },
  {
    class: 'flex-row-reverse',
    properties: 'flex-direction: row-reverse !important;',
    effective: 'flex-direction: row-reverse !important;',
  },
  {
    class: 'flex-column',
    properties: 'flex-direction: column !important;',
    effective: 'flex-direction: column !important;',
  },
  {
    class: 'flex-column-reverse',
    properties: 'flex-direction: column-reverse !important;',
    effective: 'flex-direction: column-reverse !important;',
  },
  {
    class: 'flex-grow-0',
    properties: 'flex-grow: 0 !important;',
    effective: 'flex-grow: 0 !important;',
  },
  {
    class: 'flex-grow-1',
    properties: 'flex-grow: 1 !important;',
    effective: 'flex-grow: 1 !important;',
  },
  {
    class: 'flex-shrink-0',
    properties: 'flex-shrink: 0 !important;',
    effective: 'flex-shrink: 0 !important;',
  },
  {
    class: 'flex-shrink-1',
    properties: 'flex-shrink: 1 !important;',
    effective: 'flex-shrink: 1 !important;',
  },
  {
    class: 'flex-1',
    properties: 'flex: 1 1 0 !important;',
    effective: 'flex: 1 1 0 !important;',
  },
  {
    class: 'flex-none',
    properties: 'flex: 0 0 auto !important;',
    effective: 'flex: 0 0 auto !important;',
  },
  {
    class: 'justify-start',
    properties: 'justify-content: flex-start !important;',
    effective: 'justify-content: flex-start !important;',
  },
  {
    class: 'justify-end',
    properties: 'justify-content: flex-end !important;',
    effective: 'justify-content: flex-end !important;',
  },
  {
    class: 'justify-center',
    properties: 'justify-content: center !important;',
    effective: 'justify-content: center !important;',
  },
  {
    class: 'justify-space-between',
    properties: 'justify-content: space-between !important;',
    effective: 'justify-content: space-between !important;',
  },
  {
    class: 'justify-space-around',
    properties: 'justify-content: space-around !important;',
    effective: 'justify-content: space-around !important;',
  },
  {
    class: 'justify-space-evenly',
    properties: 'justify-content: space-evenly !important;',
    effective: 'justify-content: space-evenly !important;',
  },
  {
    class: 'align-start',
    properties: 'align-items: flex-start !important;',
    effective: 'align-items: flex-start !important;',
  },
  {
    class: 'align-end',
    properties: 'align-items: flex-end !important;',
    effective: 'align-items: flex-end !important;',
  },
  {
    class: 'align-center',
    properties: 'align-items: center !important;',
    effective: 'align-items: center !important;',
  },
  {
    class: 'align-baseline',
    properties: 'align-items: baseline !important;',
    effective: 'align-items: baseline !important;',
  },
  {
    class: 'align-stretch',
    properties: 'align-items: stretch !important;',
    effective: 'align-items: stretch !important;',
  },
  {
    class: 'order-1',
    properties: 'order: 1 !important;',
    effective: 'order: 1 !important;',
  },
  {
    class: 'order-2',
    properties: 'order: 2 !important;',
    effective: 'order: 2 !important;',
  },
  {
    class: 'order-3',
    properties: 'order: 3 !important;',
    effective: 'order: 3 !important;',
  },
  {
    class: 'order-4',
    properties: 'order: 4 !important;',
    effective: 'order: 4 !important;',
  },
  {
    class: 'order-5',
    properties: 'order: 5 !important;',
    effective: 'order: 5 !important;',
  },
  {
    class: 'order-6',
    properties: 'order: 6 !important;',
    effective: 'order: 6 !important;',
  },
  {
    class: 'order-7',
    properties: 'order: 7 !important;',
    effective: 'order: 7 !important;',
  },
  {
    class: 'order-8',
    properties: 'order: 8 !important;',
    effective: 'order: 8 !important;',
  },
  {
    class: 'order-9',
    properties: 'order: 9 !important;',
    effective: 'order: 9 !important;',
  },
  {
    class: 'order-10',
    properties: 'order: 10 !important;',
    effective: 'order: 10 !important;',
  },
]
</script>

<style scoped lang="scss"></style>
