<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'rgb(var(--brand-6))',
    description: '常规',
    class: 'primary',
  },
  {
    properties: 'rgb(var(--brand-5))',
    description: '悬浮（hover）',
    class: 'primary-hover',
  },
  {
    properties: 'rgb(var(--brand-7))',
    description: '点击（click）',
    class: 'primary-pressed',
  },
  {
    properties: 'rgb(var(--brand-3))',
    description: '一般禁用',
    class: 'primary-disabled',
  },
  {
    properties: 'rgb(var(--brand-1))',
    description: '浅色/白底悬浮',
    class: 'bg-primary',
  },
])
</script>
<style lang="scss" scoped></style>
