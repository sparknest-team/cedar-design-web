<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'var(--c-color-border-1)',
    description: '浅色',
    class: 'c-color-border-1',
  },
  {
    properties: 'var(--c-color-border-2)',
    description: '一般',
    class: 'c-color-border-2',
  },
  {
    properties: 'var(--c-color-border-3)',
    description: '深/悬浮',
    class: 'c-color-border-3',
  },
  {
    properties: 'var(--c-color-border-4)',
    description: '重/按钮描边',
    class: 'c-color-border-4',
  },
])
</script>
<style lang="scss" scoped></style>
