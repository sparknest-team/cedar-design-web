<template>
  <c-table :columns="columns" :data="dataWeight" :pagination="false" />
</template>
<script lang="ts" setup>
import { columns } from './columns'

const dataWeight = [
  {
    class: 'font-weight-thin',
    properties: 'font-weight: var(--c-font-weight-thin);',
    effective: 'font-weight: 100;',
  },
  {
    class: 'font-weight-x-light',
    properties: 'font-weight: var(--c-font-weight-x-light);',
    effective: 'font-weight: 200;',
  },
  {
    class: 'font-weight-light',
    properties: 'font-weight: var(--c-font-weight-light);',
    effective: 'font-weight: 300;',
  },
  {
    class: 'font-weight-regular',
    properties: 'font-weight: var(--c-font-weight-regular);',
    effective: 'font-weight: 400;',
  },
  {
    class: 'font-weight-medium',
    properties: 'font-weight: var(--c-font-weight-medium);',
    effective: 'font-weight: 500;',
  },
  {
    class: 'font-weight-semibold',
    properties: 'font-weight: var(--c-font-weight-semibold);',
    effective: 'font-weight: 600;',
  },
  {
    class: 'font-weight-bold',
    properties: 'font-weight: var(--c-font-weight-bold);',
    effective: 'font-weight: 700;',
  },
  {
    class: 'font-weight-x-bold',
    properties: 'font-weight: var(--c-font-weight-x-bold);',
    effective: 'font-weight: 800;',
  },
  {
    class: 'font-weight-xx-bold',
    properties: 'font-weight: var(--c-font-weight-xx-bold);',
    effective: 'font-weight: 900;',
  },
]
</script>

<style lang="scss"></style>
