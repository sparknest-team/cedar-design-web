<script setup lang="ts">
import { ref } from 'vue'
const value = ref(5)
</script>
<template>
  <c-space direction="column">
    <c-rate v-model="value" clearable :empty-value="1" />
    <output aria-live="polite">Model: {{ value === undefined ? 'undefined' : JSON.stringify(value) }}</output>
  </c-space>
</template>
