<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'var(--c-color-fill-1)',
    description: '浅/禁用',
    class: 'c-fill-1',
  },
  {
    properties: 'var(--c-color-fill-2)',
    description: '常规/白底悬浮',
    class: 'c-fill-2',
  },
  {
    properties: 'var(--c-color-fill-3)',
    description: '深/灰底悬浮',
    class: 'c-fill-3',
  },
  {
    properties: 'var(--c-color-fill-4)',
    description: '重/特殊场景',
    class: 'c-fill-4',
  },
])
</script>
<style lang="scss" scoped></style>
