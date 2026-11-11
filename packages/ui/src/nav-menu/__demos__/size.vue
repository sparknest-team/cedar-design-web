<template>
  <div v-for="size in sizes" :key="size" style="margin-bottom: 16px">
    <p>尺寸：{{ size }}</p>
    <c-nav-menu :options="options" :size="size" mode="horizontal" />
  </div>
</template>
<script setup lang="ts">
import { options } from './data'
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>
