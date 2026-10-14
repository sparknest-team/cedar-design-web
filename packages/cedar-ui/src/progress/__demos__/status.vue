<script setup lang="ts">
const statuses = ['default', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'danger'] as const
</script>
<template>
  <div style="display: grid; gap: 16px">
    <c-progress v-for="status in statuses" :key="status" :status="status" :percent="60"
      ><template #text>{{ status }}</template></c-progress
    >
    <c-progress :percent="100" />
  </div>
</template>
