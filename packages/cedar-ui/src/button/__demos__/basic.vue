<script setup lang="ts">
const statuses = ['default', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger'] as const
</script>
<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px">
    <c-button v-for="status in statuses" :key="status" :status="status">{{ status }}</c-button>
  </div>
</template>
