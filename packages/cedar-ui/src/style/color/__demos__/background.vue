<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'var(--c-color-bg-white)',
    description: '顶层的白色背景',
    class: 'c-bg-0',
  },
  {
    properties: 'var(--c-color-bg-1)',
    description: '一般/常规',
    class: 'c-bg-1',
  },
  {
    properties: 'var(--c-color-bg-2)',
    description: '重/特殊场景',
    class: 'c-bg-2',
  },
])
</script>
<style lang="scss" scoped></style>
