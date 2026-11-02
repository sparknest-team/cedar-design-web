<script setup lang="ts">
import { ref } from 'vue'
const value = ref('Hello @Alice')
</script>
<template>
  <c-space direction="column">
    <c-mention v-model="value" clearable empty-value="" :data="['Alice', 'Bob']" />
    <output aria-live="polite">Model: {{ value === undefined ? 'undefined' : JSON.stringify(value) }}</output>
  </c-space>
</template>
