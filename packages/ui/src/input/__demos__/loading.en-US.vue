<script setup lang="ts">

import { ref } from "vue";
const busy = ref(true);
const value = ref("加载时仍可编辑");
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item label="Loading"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item label="Default"
        ><c-input
          v-model="value"
          :loading="busy"
          placeholder="Editable while loading"
          loading-mode="default"
      /></c-form-item>
      <c-form-item label="Line"
        ><c-input
          v-model="value"
          :loading="busy"
          placeholder="Editable while loading"
          loading-mode="line"
      /></c-form-item>
    </c-form>
    <p>Loading keeps the input editable.</p>
  </c-space>
</template>
