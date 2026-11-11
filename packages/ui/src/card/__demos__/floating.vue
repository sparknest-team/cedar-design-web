<script setup lang="ts">
import { ref } from 'vue'
const floating = ref(false)
</script>

<template>
  <c-card v-model:floating="floating" title="Project overview" :floating-duration="250">
    Summary content
    <template #footer><c-button status="primary" @click="floating = true">Expand</c-button></template>
    <template #floating-content><p style="padding: 16px">Expanded project details.</p></template>
    <template #close-button
      ><c-button aria-label="Close expanded card" @click.stop="floating = false">Close</c-button></template
    >
  </c-card>
</template>
