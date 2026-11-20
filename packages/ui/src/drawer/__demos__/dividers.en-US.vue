<script setup lang="ts">

import { ref } from "vue";

const open = ref(false);
const topDivider = ref(false);
const bottomDivider = ref(false);
</script>

<template>
  <c-button @click="open = true">Dividers</c-button>
  <c-drawer
    v-model:open="open"
    title="Dividers"
    :top-divider="topDivider"
    :bottom-divider="bottomDivider"
  >
    <c-space direction="column">
      <c-checkbox v-model="topDivider">top-divider</c-checkbox>
      <c-checkbox v-model="bottomDivider">bottom-divider</c-checkbox>
      <p>Dividers are off by default and can be enabled independently.</p>
    </c-space>
  </c-drawer>
</template>
