<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <c-button status="primary" @click="open = true">Open Message</c-button>
  <c-message
    v-model:open="open"
    status="success"
    position="center"
    closable
    :duration="0"
  >
    Declarative message
    <template #action>
      <c-button size="sm" variant="text" @click="open = false">Close</c-button>
    </template>
  </c-message>
</template>
