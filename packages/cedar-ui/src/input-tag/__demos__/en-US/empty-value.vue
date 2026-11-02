<script setup lang="ts">
import { ref } from 'vue'
const value = ref(['Alice', 'Bob'])
</script>
<template>
  <c-space direction="column">
    <c-input-tag v-model="value" clearable :empty-value="() => []" />
    <output aria-live="polite">Model: {{ value === undefined ? 'undefined' : JSON.stringify(value) }}</output>
  </c-space>
</template>
