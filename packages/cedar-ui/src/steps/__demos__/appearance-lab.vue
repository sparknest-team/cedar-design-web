<script setup lang="ts">
import { reactive as __demoReactive } from "vue";
const __demoAppearance = __demoReactive({ status: "wait", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >status<c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'wait', value: 'wait' },
            { label: 'process', value: 'process' },
            { label: 'finish', value: 'finish' },
            { label: 'error', value: 'error' },
          ]"
          aria-label="status"
      /></label>
      <label
        >size<c-select
          v-model="__demoAppearance['size']"
          :clearable="false"
          :options="[
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
          ]"
          aria-label="size"
      /></label>
    </c-space>
    <c-steps :current="2" v-bind="__demoAppearance">
      <c-step>Succeeded</c-step>
      <c-step>Processing</c-step>
      <c-step>Pending</c-step>
    </c-steps>
  </c-space>
</template>
