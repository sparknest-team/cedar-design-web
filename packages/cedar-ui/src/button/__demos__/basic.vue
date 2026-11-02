<script setup lang="ts">
const statuses = [
  "default",
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "danger",
] as const;
</script>
<template>
  <c-space wrap size="12px">
    <c-button v-for="status in statuses" :key="status" :status="status">{{
      status
    }}</c-button>
  </c-space>
</template>
