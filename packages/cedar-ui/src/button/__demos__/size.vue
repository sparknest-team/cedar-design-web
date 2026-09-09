<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>
<template>
  <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px">
    <c-button v-for="size in sizes" :key="size" :size="size">{{ size }}</c-button>
  </div>
</template>
