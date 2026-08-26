<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>
<script lang="ts" setup>
import { h } from 'vue'
import { Message } from '@cedarjs/ui'

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
        innerHTML: `<div>${data.record.effective?.replaceAll('\n', '<br/>')}</div>`, // 等效于 v-html
      })
    },
  },
]
const data = [
  {
    class: 'c-text-left',
    properties: 'text-align: left !important;',
    effective: 'text-align: left !important;',
  },
  {
    class: 'c-text-center',
    properties: 'text-align: center !important;',
    effective: 'text-align: center !important;',
  },
  {
    class: 'c-text-right',
    properties: 'text-align: right !important;',
    effective: 'text-align: right !important;',
  },
  {
    class: 'c-text-justify',
    properties: 'text-align: justify !important;',
    effective: 'text-align: justify !important;',
  },
]
</script>

<style lang="scss"></style>
