<script setup lang="ts">
const sizes = ['sm', 'md'] as const
</script>

<template>
  <c-space direction="column" style="width: 100%">
    <c-card v-for="size in sizes" :key="size" :size="size" :title="size" subtitle="Content density"
      >Card content</c-card
    >
  </c-space>
</template>
