<script setup lang="ts">
const items = [{ value: 24 }, { value: 18, color: '#722ed1' }, { value: 30, color: '#0fc6c2' }]
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div style="display: grid; gap: 16px; max-width: 520px">
    <div v-for="size in sizes" :key="size" style="display: grid; grid-template-columns: 24px 1fr; align-items: center; gap: 12px">
      <span>{{ size }}</span>
      <c-progress-group :items="items" :size="size" />
    </div>
  </div>
</template>
