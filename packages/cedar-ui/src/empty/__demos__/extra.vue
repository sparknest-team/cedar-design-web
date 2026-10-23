<script setup lang="ts">
import { ref } from 'vue'
const attempts = ref(0)
</script>

<template>
  <c-empty :description="attempts ? 'No data. Local refresh completed.' : 'No data, please reload'">
    <template #extra>
      <c-button status="primary" @click="attempts++">Reload</c-button>
      <p aria-live="polite">Local refresh attempts: {{ attempts }}</p>
    </template>
  </c-empty>
</template>
