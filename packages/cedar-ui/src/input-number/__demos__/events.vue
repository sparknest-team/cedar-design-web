<template>
  <c-space direction="column">
    <c-input-number
      v-model="value"
      clearable
      model-event="input"
      :min="0"
      :max="100"
      placeholder="输入后失焦提交 change"
      @input="handleInput"
      @change="handleChange"
      @clear="handleClear"
    />
    <div>value: {{ value }}</div>
    <div>last event: {{ lastEvent }}</div>
  </c-space>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const value = ref(12);
    const lastEvent = ref("-");

    const handleInput = (number, inputValue) => {
      lastEvent.value = `input: ${inputValue} (${number ?? "undefined"})`;
    };
    const handleChange = (number) => {
      lastEvent.value = `change: ${number ?? "undefined"}`;
    };
    const handleClear = () => {
      lastEvent.value = "clear";
    };

    return { value, lastEvent, handleInput, handleChange, handleClear };
  },
};
</script>
