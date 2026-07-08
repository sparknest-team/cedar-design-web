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
    class: 'h-10',
    properties: 'height:10% !important;',
    effective: 'height:10% !important;',
  },
  {
    class: 'h-20',
    properties: 'height:20% !important;',
    effective: 'height:20% !important;',
  },
  {
    class: 'h-30',
    properties: 'height:30% !important;',
    effective: 'height:30% !important;',
  },
  {
    class: 'h-40',
    properties: 'height:40% !important;',
    effective: 'height:40% !important;',
  },
  {
    class: 'h-50',
    properties: 'height:50% !important;',
    effective: 'height:50% !important;',
  },
  {
    class: 'h-60',
    properties: 'height:60% !important;',
    effective: 'height:60% !important;',
  },
  {
    class: 'h-70',
    properties: 'height:70% !important;',
    effective: 'height:70% !important;',
  },
  {
    class: 'h-80',
    properties: 'height:80% !important;',
    effective: 'height:80% !important;',
  },
  {
    class: 'h-90',
    properties: 'height:90% !important;',
    effective: 'height:90% !important;',
  },
  {
    class: 'h-100',
    properties: 'height:100% !important;',
    effective: 'height:100% !important;',
  },
  {
    class: 'h-unset',
    properties: 'height:unset !important;',
    effective: 'height:unset !important;',
  },
  {
    class: 'h-auto',
    properties: 'height:auto !important;',
    effective: 'height:auto !important;',
  },
  {
    class: 'w-10',
    properties: 'width:10% !important;',
    effective: 'width:10% !important;',
  },
  {
    class: 'w-20',
    properties: 'width:20% !important;',
    effective: 'width:20% !important;',
  },
  {
    class: 'w-30',
    properties: 'width:30% !important;',
    effective: 'width:30% !important;',
  },
  {
    class: 'w-40',
    properties: 'width:40% !important;',
    effective: 'width:40% !important;',
  },
  {
    class: 'w-50',
    properties: 'width:50% !important;',
    effective: 'width:50% !important;',
  },
  {
    class: 'w-60',
    properties: 'width:60% !important;',
    effective: 'width:60% !important;',
  },
  {
    class: 'w-70',
    properties: 'width:70% !important;',
    effective: 'width:70% !important;',
  },
  {
    class: 'w-80',
    properties: 'width:80% !important;',
    effective: 'width:80% !important;',
  },
  {
    class: 'w-90',
    properties: 'width:90% !important;',
    effective: 'width:90% !important;',
  },
  {
    class: 'w-100',
    properties: 'width:100% !important;',
    effective: 'width:100% !important;',
  },
  {
    class: 'w-unset',
    properties: 'width:unset !important;',
    effective: 'width:unset !important;',
  },
  {
    class: 'w-auto',
    properties: 'width:auto !important;',
    effective: 'width:auto !important;',
  },
]
</script>

<style scoped lang="scss"></style>
