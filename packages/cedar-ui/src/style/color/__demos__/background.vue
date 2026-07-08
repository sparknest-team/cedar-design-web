<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: '--',
    description: '顶层的白色背景',
    class: 'bg-0',
  },
  {
    properties: '--',
    description: '一般/常规',
    class: 'bg-1',
  },
  {
    properties: '--',
    description: '重/特殊场景',
    class: 'bg-2',
  },
])
</script>
<style lang="scss" scoped></style>
