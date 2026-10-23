<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("shanghai");
const options = [
  {
    label: "华东",
    value: "east",
    children: [
      { label: "上海", value: "shanghai" },
      { label: "杭州", value: "hangzhou" },
    ],
  },
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
    <c-cascader
      v-model="value"
      :options="options"
      clearable
      v-bind="__demoState"
    ></c-cascader>
  </c-space>
</template>
