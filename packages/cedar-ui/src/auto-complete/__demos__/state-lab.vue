<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("研发");
const options = [{ value: "研发" }, { value: "研发平台" }, { value: "设计" }];
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
    <c-auto-complete
      v-model="value"
      :options="options"
      clearable
      v-bind="__demoState"
    ></c-auto-complete>
  </c-space>
</template>
