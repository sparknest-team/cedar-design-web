<template>
  <c-table :columns="columns" :data="dataLineHeight" :pagination="false" />
</template>
<script lang="ts" setup>
import { columns } from './columns'

const dataLineHeight = [
  {
    class: 'line-height-1',
    properties: 'line-height: var(--line-height-default);',
    effective: 'line-height: 1.5;',
  },
]
</script>

<style lang="scss"></style>
