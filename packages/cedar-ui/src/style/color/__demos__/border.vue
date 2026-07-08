<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { columns } from './columns'

const data = reactive([
  {
    properties: 'var(--neutral-2)',
    description: '浅色',
    class: 'border-1',
  },
  {
    properties: 'var(--neutral-3)',
    description: '一般',
    class: 'border-2',
  },
  {
    properties: 'var(--neutral-4)',
    description: '深/悬浮',
    class: 'border-3',
  },
  {
    properties: 'var(--neutral-6)',
    description: '重/按钮描边',
    class: 'border-4',
  },
])
</script>
<style lang="scss" scoped></style>
