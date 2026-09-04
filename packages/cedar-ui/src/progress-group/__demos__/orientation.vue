<script setup lang="ts">
const items = [
  { label: '系统', value: 24, color: '#64748b' },
  { label: '应用', value: 18, color: '#f53f3f' },
  { label: '媒体', value: 32, color: '#00b42a' },
]
</script>

<template>
  <div style="display: flex; gap: 64px; align-items: flex-start">
    <c-progress-group :items="items" status style="width: 420px" />
    <c-progress-group :items="items" orientation="vertical" size="lg" status style="height: 220px" />
  </div>
</template>
