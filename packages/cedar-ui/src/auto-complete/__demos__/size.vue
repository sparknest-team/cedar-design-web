<template>
  <c-space direction="vertical" size="md">
    <c-auto-complete v-for="size in sizes" :key="size" :size="size" :options="options" :placeholder="size" />
  </c-space>
</template>

<script setup lang="ts">
import type { ComponentSize } from '../../_utils/constant'

const sizes: ComponentSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
const options = ['Beijing', 'Shanghai', 'Chengdu']
</script>
