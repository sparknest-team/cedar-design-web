<template>
  <c-space direction="column" fill size="lg">
    <c-table :columns="columns" :data="data" :pagination="false" />
  </c-space>
</template>
<script lang="ts" setup>
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
    class: 'shadow-small',
    properties: 'box-shadow: var(--shadow-small);',
    effective: 'box-shadow: 0px 2px 6px 0px #363C540F, 0px 1px 3px 0px #363C5408;',
  },
  {
    class: 'shadow-medium',
    properties: 'box-shadow: var(--shadow-medium);',
    effective: 'box-shadow: 0px 4px 10px 0px #363C5414, 0px 2px 4px 0px #363C540A;',
  },
  {
    class: 'shadow-large',
    properties: 'box-shadow: var(--shadow-large);',
    effective: 'box-shadow: 0px 6px 24px 0px #363C5414, 0px 4px 10px 0px #27303905;',
  },
]
</script>

<style lang="scss" scoped></style>
