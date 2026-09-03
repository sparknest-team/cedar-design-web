<template>
  <c-table :columns="columns" :data="dataFamily" :pagination="false" />
</template>
<script lang="ts" setup>
import { columns } from "./columns";

const dataFamily = [
  {
    class: "font-regular",
    properties: "font-family: var(--c-font-regular);",
    effective: "font-family: Auto;",
  },
  {
    class: "font-number",
    properties: "font-family: var(--c-font-number-bold);",
    effective: "font-family: Barlow-Bold;",
  },
  {
    class: "font-number-regular",
    properties: "font-family: var(--c-font-number-regular);",
    effective: "font-family: Barlow-Regular;",
  },
  {
    class: "font-number-bold",
    properties: "font-family: var(--c-font-number-bold);",
    effective: "font-family: Barlow-Bold;",
  },
];
</script>

<style lang="scss">
.table-line-height-unset .c-table-td {
  line-height: unset;
}
</style>
