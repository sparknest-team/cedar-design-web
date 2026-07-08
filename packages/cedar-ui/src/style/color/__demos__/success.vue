<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'rgb(var(--success-6))',
    description: '常规',
    class: 'success',
  },
  {
    properties: 'rgb(var(--success-5))',
    description: '悬浮（hover）',
    class: 'success-hover',
  },
  {
    properties: 'rgb(var(--success-7))',
    description: '点击（click）',
    class: 'success-pressed',
  },
  {
    properties: 'rgb(var(--success-3))',
    description: '一般禁用',
    class: 'success-disabled',
  },
  {
    properties: 'rgb(var(--success-1))',
    description: '浅色/白底悬浮',
    class: 'bg-success',
  },
])
</script>
<style lang="scss" scoped></style>
