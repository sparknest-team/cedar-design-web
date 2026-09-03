<template>
  <c-space direction="column" fill size="md">
    <c-alert type="info">
      Preset 在构建期注入主题；固定工具类是现成 CSS。二者可同时使用。
    </c-alert>
    <c-table :columns="columns" :data="data" :pagination="false" />
  </c-space>
</template>

<script lang="ts" setup>
const columns = [
  { title: "能力", dataIndex: "kind" },
  { title: "例子", dataIndex: "example" },
  { title: "说明", dataIndex: "note" },
];

const data = [
  {
    kind: "Preset 颜色",
    example: "c-bg-primary / c-text-success",
    note: "需配置 @cedarjs/preset-*",
  },
  {
    kind: "Preset 字号",
    example: "c-text-xs / c-text-lg",
    note: "挂 --c-font-size-*",
  },
  {
    kind: "Preset 断点",
    example: "sm: / md: / lg: / xl:",
    note: "数值与设计对齐",
  },
  {
    kind: "固定 Utilities",
    example: "c-text-1 / c-fill-1",
    note: "utilities 语义色，不经 Uno/TW",
  },
];
</script>
