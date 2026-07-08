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
    class: 'hidden',
    properties: 'display: none !important;',
    effective: 'display: none !important;',
  },
  {
    class: 'inline',
    properties: 'display: inline !important;',
    effective: 'display: inline !important;',
  },
  {
    class: 'inline-block',
    properties: 'display: inline-block !important;',
    effective: 'display: inline-block !important;',
  },
  {
    class: 'block',
    properties: 'display: block !important;',
    effective: 'display: block !important;',
  },
  {
    class: 'flex',
    properties: 'display: flex !important;',
    effective: 'display: flex !important;',
  },
  {
    class: 'inline-flex',
    properties: 'display: inline-flex !important;',
    effective: 'display: inline-flex !important;',
  },
  {
    class: 'grid',
    properties: 'display: grid !important;',
    effective: 'display: grid !important;',
  },
  {
    class: 'inline-grid',
    properties: 'display: inline-grid !important;',
    effective: 'display: inline-grid !important;',
  },
]
</script>

<style scoped lang="scss"></style>
