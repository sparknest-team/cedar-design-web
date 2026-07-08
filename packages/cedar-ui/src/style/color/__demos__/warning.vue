<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'rgb(var(--orange-6))',
    description: '常规',
    class: 'warning',
  },
  {
    properties: 'rgb(var(--orange-5))',
    description: '悬浮（hover）',
    class: 'warning-hover',
  },
  {
    properties: 'rgb(var(--orange-7))',
    description: '点击（click）',
    class: 'warning-pressed',
  },
  {
    properties: 'rgb(var(--orange-3))',
    description: '一般禁用',
    class: 'warning-disabled',
  },
  {
    properties: 'rgb(var(--orange-1))',
    description: '浅色/白底悬浮',
    class: 'bg-warning',
  },
])
</script>
<style lang="scss" scoped></style>
