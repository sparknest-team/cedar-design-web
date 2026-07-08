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
    class: 'link',
  },
  {
    properties: 'rgb(var(--brand-5))',
    description: '悬浮（hover）',
    class: 'link-hover',
  },
  {
    properties: 'rgb(var(--brand-7))',
    cssVarName: '--link-7',
    description: '点击（click）',
    class: 'link-pressed',
  },
  {
    properties: 'rgb(var(--brand-3))',
    description: '一般禁用',
    class: 'link-disabled',
  },
  {
    properties: 'rgb(var(--brand-1))',
    description: '浅色/白底悬浮',
    class: 'bg-link',
  },
])
</script>
<style lang="scss" scoped></style>
