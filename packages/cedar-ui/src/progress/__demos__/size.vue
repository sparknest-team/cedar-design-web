<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>
<template>
  <div style="display: grid; gap: 16px">
    <div v-for="size in sizes" :key="size" style="display: flex; align-items: center; gap: 16px">
      <span>{{ size }}</span
      ><c-progress :size="size" :percent="42" /><c-progress mode="circle" :size="size" :percent="42" />
    </div>
    <c-progress :size="10" :percent="12.5" />
    <c-progress size="0.75rem" :stroke-width="6" :percent="60" />
    <c-progress mode="circle" size="6rem" :percent="75" />
  </div>
</template>
