<template>
  <c-table :columns="columns" :data="data" :pagination="false" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { columns } from "./columns";

const data = reactive([
  {
    properties: "var(--c-color-text-1)",
    description: "强调/正文标题、一级文字",
    class: "c-text-1",
  },
  {
    properties: "var(--c-color-text-2)",
    description: "次强调/正文标题、二级文字 图标",
    class: "c-text-2",
  },
  {
    properties: "var(--c-color-text-3)",
    description: "次要信息、三级文字",
    class: "c-text-3",
  },
  {
    properties: "var(--c-color-text-4)",
    description: "置灰禁用 / 占位",
    class: "c-text-4",
  },
]);
</script>
<style lang="scss" scoped></style>
