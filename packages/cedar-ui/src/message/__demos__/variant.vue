<script setup lang="ts">
import { Message } from "@cedarjs/ui";
const variants = ["neutral", "tonal", "solid"] as const;
</script>

<template>
  <c-space>
    <c-button
      v-for="variant in variants"
      :key="variant"
      @click="Message.success({ content: variant, variant, closable: true })"
      >{{ variant }}</c-button
    >
  </c-space>
</template>
