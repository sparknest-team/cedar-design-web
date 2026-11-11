<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref([]);
const __demoState = __demoReactive({ disabled: false, readonly: false });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="__demoState['disabled']">disabled</c-checkbox>
      <c-checkbox v-model="__demoState['readonly']">readonly</c-checkbox>
    </c-space>
    <c-upload
      v-model="value"
      :auto-upload="false"
      v-bind="__demoState"
    ></c-upload>
  </c-space>
</template>
