<template>
  <c-table :columns="columns" :data="dataSize" :pagination="false" class="table-line-height-unset" />
</template>
<script lang="ts" setup>
import { columns } from './columns'

const dataSize = [
  {
    class: 'font-size-body-1',
    properties: 'font-size: var(--c-font-size-body-1);',
    effective: 'font-size: 12px;',
  },
  {
    class: 'font-size-body-2',
    properties: 'font-size: var(--c-font-size-body-2);',
    effective: 'font-size: 14px;',
  },
  {
    class: 'font-size-subtitle-1',
    properties: 'font-size: var(--c-font-size-subtitle-1);',
    effective: 'font-size: 16px;',
  },
  {
    class: 'font-size-subtitle-2',
    properties: 'font-size: var(--c-font-size-subtitle-2);',
    effective: 'font-size: 18px;',
  },
  {
    class: 'font-size-heading-1',
    properties: 'font-size: var(--c-font-size-heading-1);',
    effective: 'font-size: 20px;',
  },
  {
    class: 'font-size-heading-2',
    properties: 'font-size: var(--c-font-size-heading-2);',
    effective: 'font-size: 24px;',
  },
  {
    class: 'font-size-heading-3',
    properties: 'font-size: var(--c-font-size-heading-3);',
    effective: 'font-size: 32px;',
  },
  {
    class: 'font-size-heading-4',
    properties: 'font-size: var(--c-font-size-heading-4);',
    effective: 'font-size: 40px;',
  },
  {
    class: 'font-size-display-1',
    properties: 'font-size: var(--c-font-size-display-1);',
    effective: 'font-size: 48px;',
  },
  {
    class: 'font-size-display-2',
    properties: 'font-size: var(--c-font-size-display-2);',
    effective: 'font-size: 56px;',
  },
]
</script>

<style lang="scss">
.table-line-height-unset .c-table-td {
  line-height: unset;
}
</style>
