<script setup lang="ts">
import { ref } from "vue";
const stacked = ref(false);
const vertical = ref(false);
const loading = ref(false);
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="stacked">Stacked labels</c-checkbox>
      <c-checkbox v-model="vertical">Vertical group</c-checkbox>
      <c-checkbox v-model="loading">Load first action</c-checkbox>
    </c-space>
    <c-button-group status="primary" :stacked="stacked" :vertical="vertical">
      <c-button :loading="loading"
        ><template #icon><c-icon-check /></template>Save</c-button
      >
      <c-button
        ><template #icon><c-icon-close /></template>Cancel</c-button
      >
    </c-button-group>
  </c-space>
</template>
