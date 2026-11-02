<script setup lang="ts">
import { ref } from "vue";
const clicks = ref(0);
</script>
<template>
  <c-space wrap size="12px">
    <c-button disabled @click="clicks++">Disabled button</c-button>
    <c-button
      component="a"
      href="#blocked-button-link"
      disabled
      @click="clicks++"
      >Disabled link</c-button
    >
    <c-button
      component="a"
      href="#blocked-button-link"
      loading
      @click="clicks++"
      >Loading link</c-button
    >
  </c-space>
  <p aria-live="polite">Blocked clicks: {{ clicks }}</p>
</template>
