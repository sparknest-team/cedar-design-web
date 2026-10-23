<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({
  variant: "tonal",
  status: "default",
});
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'tonal', value: 'tonal' },
            { label: 'outline', value: 'outline' },
            { label: 'standard', value: 'standard' },
          ]"
          aria-label="variant"
      /></label>
      <label
        >status<c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
            { label: 'default', value: 'default' },
          ]"
          aria-label="status"
      /></label>
    </c-space>
    <c-alert v-bind="__demoAppearance">This is an info alert.</c-alert>
  </c-space>
</template>
