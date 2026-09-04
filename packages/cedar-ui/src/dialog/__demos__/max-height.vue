<template>
  <c-button @click="open = true">Open Long Content Dialog</c-button>

  <c-dialog
    v-model:open="open"
    title="Long Content"
    :body-style="{ maxHeight: '50vh', overflowY: 'auto' }"
  >
    <p v-for="item in 12" :key="item">
      {{ item }}. Long dialog content remains scrollable while the title and
      actions stay visible.
    </p>
  </c-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>
