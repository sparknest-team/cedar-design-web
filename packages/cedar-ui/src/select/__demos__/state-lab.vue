<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("design");
const options = [
  { label: "研发", value: "dev" },
  { label: "设计", value: "design" },
  { label: "运营", value: "ops", disabled: true },
];
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
    <c-select
      v-model="value"
      :options="options"
      clearable
      v-bind="__demoState"
    ></c-select>
  </c-space>
</template>
