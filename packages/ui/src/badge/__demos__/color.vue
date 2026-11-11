<script setup lang="ts">
const statuses = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
] as const
</script>

<template>
  <c-space direction="column">
    <c-space wrap
      ><c-badge
        v-for="status in statuses"
        :key="status"
        :status="status"
        mode="inline"
        :description="status"
        :content="1"
    /></c-space>
    <c-space wrap
      ><c-badge v-for="status in statuses" :key="status" :status="status" :content="status"
    /></c-space>
    <c-space wrap
      ><c-badge color="#7816ff" text-color="#ffffff" content="Purple" /><c-badge
        color="#005f73"
        text-color="#ffffff"
        content="Teal"
    /></c-space>
  </c-space>
</template>
