<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("design");
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
    <c-radio v-model="value" value="design" v-bind="__demoState">设计</c-radio>
  </c-space>
</template>
