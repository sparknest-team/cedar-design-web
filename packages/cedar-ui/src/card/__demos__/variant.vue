<script setup lang="ts">
const variants = ['default', 'outline', 'tonal'] as const
</script>

<template>
  <c-space direction="column" style="width: 100%">
    <c-card v-for="variant in variants" :key="variant" :variant="variant" :title="variant"
      >Card content</c-card
    >
    <c-card :elevation="false" title="No elevation">Card content</c-card>
    <c-card :elevation="4" title="Elevation 4">Card content</c-card>
  </c-space>
</template>
