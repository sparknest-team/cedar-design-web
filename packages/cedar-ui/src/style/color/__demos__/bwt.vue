<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { h, reactive } from 'vue'
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
    title: 'Css变量/变量效果',
    dataIndex: 'effective',
    render: (data) => {
      return h(
        'div',
        {
          style: {
            cursor: 'pointer',
          },
          onClick: () => {
            navigator.clipboard
              .writeText('var(--' + data.record.class + ')')
              .then(() => {
                Message.success('copy success')
              })
              .catch((err) => {
                Message.fail('copy fail')
              })
          },
        },
        [
          h('div', '--' + data.record.class),
          h('div', { class: data.record.class + ' ' + (data.record.bgClass || '') }, data.record.properties),
        ],
      )
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
]

const data = reactive([
  {
    properties: 'rgb(255, 255, 255)',
    description: '白色字体',
    class: 'white',
    bgClass: 'bg-black',
  },
  {
    properties: 'rgb(0, 0, 0)',
    description: '黑色字体',
    class: 'black',
    bgClass: 'bg-white',
  },
  {
    properties: 'rgb(255, 255, 255)',
    description: '白色背景',
    class: 'bg-white',
  },
  {
    properties: 'transparent',
    description: '透明背景',
    class: 'bg-transparent',
  },
])
</script>
<style lang="scss" scoped></style>
