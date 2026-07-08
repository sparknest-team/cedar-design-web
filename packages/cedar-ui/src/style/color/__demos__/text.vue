<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'rgb(var(--gray-10))',
    description: '强调/正文标题、一级文字',
    class: 'text-primary',
  },
  {
    properties: 'rgb(var(--gray-8))',
    description: '次强调/正文标题、二级文字 图标',
    class: 'text-secondary',
  },
  {
    properties: 'rgb(var(--gray-7))',
    description: '次要信息、三级文字',
    class: 'text-tertiary',
  },
  {
    properties: 'rgb(var(--gray-6))',
    description: '置灰禁用',
    class: 'text-disabled',
  },
  {
    properties: 'rgb(var(--gray-6))',
    description: '暗文占位',
    class: 'text-placeholder',
  },
])
</script>
<style lang="scss" scoped></style>
