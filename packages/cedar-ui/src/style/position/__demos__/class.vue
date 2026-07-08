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
    class: 'static',
    properties: 'position: static !important;',
    effective: 'position: static !important;',
  },
  {
    class: 'relative',
    properties: 'position: relative !important;',
    effective: 'position: relative !important;',
  },
  {
    class: 'absolute',
    properties: 'position: absolute !important;',
    effective: 'position: absolute !important;',
  },
  {
    class: 'fixed',
    properties: 'position: fixed !important;',
    effective: 'position: fixed !important;',
  },
  {
    class: 'sticky',
    properties: 'position: sticky !important;',
    effective: 'position: sticky !important;',
  },
  {
    class: 'position-x-center',
    properties: 'left: 50%; \ntransform: translateX(-50%);',
    effective: 'left: 50%; \ntransform: translateX(-50%);',
  },
  {
    class: 'position-y-center',
    properties: 'top: 50%; \ntransform: translateY(-50%);',
    effective: 'top: 50%; \ntransform: translateY(-50%);',
  },
  {
    class: 'position-center',
    properties: 'top: 50%; \nleft: 50%; \ntransform: translate(-50%, -50%);',
    effective: 'top: 50%; \nleft: 50%; \ntransform: translate(-50%, -50%);',
  },
]
</script>

<style scoped lang="scss"></style>
