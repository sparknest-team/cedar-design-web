<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("2026-10-23");
const __demoState = __demoReactive({
  disabled: false,
  readonly: false,
  error: false,
});
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="__demoState['disabled']">disabled</c-checkbox>
      <c-checkbox v-model="__demoState['readonly']">readonly</c-checkbox>
      <c-checkbox v-model="__demoState['error']">error</c-checkbox>
    </c-space>
    <c-date
      v-model="value"
      value-format="YYYY-MM-DD"
      v-bind="__demoState"
    ></c-date>
  </c-space>
</template>
