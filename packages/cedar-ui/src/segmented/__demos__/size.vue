<template>
  <c-space direction="vertical">
    <c-segmented v-model="value" size="xs" :options="options" />
    <c-segmented v-model="value" size="sm" :options="options" />
    <c-segmented v-model="value" size="md" :options="options" />
    <c-segmented v-model="value" size="lg" :options="options" />
    <c-segmented v-model="value" size="xl" :options="options" />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('md')
const options = ['xs', 'sm', 'md', 'lg', 'xl']
</script>
