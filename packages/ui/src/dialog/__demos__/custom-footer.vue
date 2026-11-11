<template>
  <c-button @click="open = true">Open Custom Footer Dialog</c-button>

  <c-dialog v-model:open="open">
    <template #title>Custom Slots</template>
    Use the footer slot when the actions need different priorities or wording.
    <template #footer="{ close, cancel, confirm }">
      <c-space>
        <c-button variant="text" @click="close">Later</c-button>
        <c-button variant="outline" @click="cancel">Cancel</c-button>
        <c-button status="primary" @click="confirm">Continue</c-button>
      </c-space>
    </template>
  </c-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>
