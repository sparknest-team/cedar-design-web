<script setup lang="ts">
const variants = ['circle', 'round', 'line', 'md3'] as const
</script>

<template>
  <c-space wrap
    ><label v-for="variant in variants" :key="variant"
      >{{ variant }} <c-switch :variant="variant" :aria-label="variant" /></label
  ></c-space>
</template>
