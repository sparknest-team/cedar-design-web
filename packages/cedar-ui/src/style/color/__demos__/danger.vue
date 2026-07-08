<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'rgb(var(--red-6))',
    description: '常规',
    class: 'danger',
  },
  {
    properties: 'rgb(var(--red-5))',
    description: '悬浮（hover）',
    class: 'danger-hover',
  },
  {
    properties: 'rgb(var(--red-7))',
    description: '点击（click）',
    class: 'danger-pressed',
  },
  {
    properties: 'rgb(var(--red-3))',
    description: '一般禁用',
    class: 'danger-disabled',
  },
  {
    properties: 'rgb(var(--red-1))',
    description: '浅色/白底悬浮',
    class: 'bg-danger',
  },
])
</script>
<style lang="scss" scoped></style>
