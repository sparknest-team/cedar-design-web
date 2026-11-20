<script setup lang="ts">
const inlineCopy = {
  example: "Example"
};

import { ref } from "vue";
const loading = ref(true);
</script>
<template>
  <c-space direction="column" style="width: 100%" :size="16">
    <c-form layout="vertical"
      ><c-form-item label="Loading"
        ><c-switch v-model="loading" /></c-form-item
    ></c-form>
    <c-input-tag :loading="loading" :default-value="[inlineCopy.example]" />
    <p>Loading is controlled by business state.</p>
  </c-space>
</template>
