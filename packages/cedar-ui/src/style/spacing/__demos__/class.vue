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
    class: 'mt-0',
    effective: 'margin-top: 0px !important;',
  },
  {
    class: 'mr-24',
    effective: 'margin-right: 24px !important;',
  },
  {
    class: 'mb-32',
    effective: 'margin-bottom: 32px !important;',
  },
  {
    class: 'ml-64',
    effective: 'margin-left: 64px !important;',
  },
  {
    class: 'mx-0',
    effective: 'margin-left: 0px !important;\nmargin-right: 0px !important;',
  },
  {
    class: 'my-64',
    effective: 'margin-top: 64px !important;\nmargin-bottom: 64px !important;',
  },
  {
    class: 'm-0',
    effective:
      'margin-top: 0px !important;\nmargin-right: 0px !important;\nmargin-bottom: 0px !important;\nmargin-left: 0px !important;',
  },
  {
    class: 'm-auto',
    effective:
      'margin-top:auto !important;\nmargin-right: auto !important;\nmargin-bottom: auto !important;\nmargin-left: auto !important;',
  },
  {
    class: 'mt-unset',
    effective: 'margin-top:unset !important;',
  },
  {
    class: '···',
    effective: '···',
  },
  {
    class: 'pt-0',
    effective: 'padding-top: 0px !important;',
  },
  {
    class: 'pr-8',
    effective: 'padding-right: 8px !important;',
  },
  {
    class: 'pb-16',
    effective: 'padding-bottom: 16px !important;',
  },
  {
    class: 'pl-32',
    effective: 'padding-left: 32px !important;',
  },
  {
    class: 'px-0',
    effective: 'padding-left: 0px !important;\npadding-right: 0px !important;',
  },
  {
    class: 'py-24',
    effective: 'padding-top: 24px !important;\npadding-bottom: 24px !important;',
  },
  {
    class: '···',
    effective: '···',
  },
  {
    class: 'pt-xs',
    effective: 'padding-top: 2px !important;',
  },
  {
    class: 'pr-sm',
    effective: 'padding-right: 8px !important;',
  },
  {
    class: 'pb-md',
    effective: 'padding-bottom: 16px !important;',
  },
  {
    class: '···',
    effective: '···',
  },
]
</script>

<style scoped lang="scss"></style>
