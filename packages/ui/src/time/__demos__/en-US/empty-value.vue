<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string | number | Date | undefined>('09:00')
</script>
<template>
  <c-space direction="column">
    <c-time v-model="value" format="HH:mm" clearable :empty-value="() => undefined" />
    <output aria-live="polite">Model: {{ value === undefined ? 'undefined' : JSON.stringify(value) }}</output>
  </c-space>
</template>
