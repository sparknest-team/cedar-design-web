<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: '--',
    description: '白色填充，用在表单元素的内框的背景色。',
    class: 'fill-0',
  },
  // {
  //   properties: 'var(--neutral-1)',
  //   description: '浅/禁用',
  //   class: 'fill-1',
  // },
  // {
  //   properties: 'var(--neutral-2)',
  //   description: '常规/白底悬浮',
  //   class: 'fill-2',
  // },
  // {
  //   properties: 'var(--neutral-3)',
  //   description: '深/灰底悬浮',
  //   class: 'fill-3',
  // },
  // {
  //   properties: 'var(--neutral-4)',
  //   description: '重/特殊场景',
  //   class: 'fill-4',
  // },
])
</script>
<style lang="scss" scoped></style>
