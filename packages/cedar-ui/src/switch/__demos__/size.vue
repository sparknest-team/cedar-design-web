<script setup lang="ts">
const sizes = ['sm', 'md', 'lg'] as const
</script>

<template>
  <c-space wrap
    ><label v-for="size in sizes" :key="size">{{ size }} <c-switch :size="size" :aria-label="size" /></label
  ></c-space>
</template>
