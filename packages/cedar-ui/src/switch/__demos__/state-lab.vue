<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref(false);
const __demoState = __demoReactive({ disabled: false, readonly: false });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="__demoState['disabled']">disabled</c-checkbox>
      <c-checkbox v-model="__demoState['readonly']">readonly</c-checkbox>
    </c-space>
    <c-switch v-model="value" v-bind="__demoState"></c-switch>
  </c-space>
</template>
