<template>
  <c-table :columns="columns" :data="dataFamily" :pagination="false" />
</template>
<script lang="ts" setup>
import { columns } from './columns'

const dataFamily = [
  {
    class: 'font-regular',
    properties: 'font-family: var(--font-regular);',
    effective: 'font-family: Auto;',
  },
  {
    class: 'font-number',
    properties: 'font-family: var(--font-number-bold);',
    effective: 'font-family: Barlow-Bold;',
  },
  {
    class: 'font-number-regular',
    properties: 'font-family: var(--font-number-regular);',
    effective: 'font-family: Barlow-Regular;',
  },
  {
    class: 'font-number-bold',
    properties: 'font-family: var(--font-number-bold);',
    effective: 'font-family: Barlow-Bold;',
  },
]
</script>

<style lang="scss">
.table-line-height-unset .cedar-table-td {
  line-height: unset;
}
</style>
