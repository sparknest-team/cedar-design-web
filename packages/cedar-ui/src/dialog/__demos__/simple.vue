<template>
  <c-button @click="open = true">Open Simple Dialog</c-button>

  <c-dialog
    v-model:open="open"
    simple
    type="info"
    title="Simple Dialog"
    message="A compact dialog for short and focused information."
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>
