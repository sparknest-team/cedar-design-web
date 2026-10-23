<script setup lang="ts">
import { reactive as __demoReactive } from "vue";
const inputStyle = { width: "360px" };
const __demoState = __demoReactive({ disabled: false, readonly: false });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-checkbox v-model="__demoState['disabled']">disabled</c-checkbox>
      <c-checkbox v-model="__demoState['readonly']">readonly</c-checkbox>
    </c-space>
    <c-search
      :style="inputStyle"
      placeholder="加载中"
      loading
      v-bind="__demoState"
    />
  </c-space>
</template>
