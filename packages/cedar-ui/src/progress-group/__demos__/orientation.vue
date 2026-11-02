<script setup lang="ts">
const items = [
  { label: "系统", value: 24, color: "#64748b" },
  { label: "应用", value: 18, color: "#f53f3f" },
  { label: "媒体", value: 32, color: "#00b42a" },
];
</script>

<template>
  <c-space wrap size="64px" align="flex-start">
    <c-progress-group :items="items" show-text style="width: 420px" />
    <c-progress-group
      :items="items"
      orientation="vertical"
      size="lg"
      show-text
      style="height: 220px"
    />
  </c-space>
</template>
