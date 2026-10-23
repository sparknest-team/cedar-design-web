<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({ status: "default", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >status<c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'primary', value: 'primary' },
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
          ]"
          aria-label="status"
      /></label>
      <label
        >size<c-select
          v-model="__demoAppearance['size']"
          :clearable="false"
          :options="[
            { label: 'xs', value: 'xs' },
            { label: 'md', value: 'md' },
          ]"
          aria-label="size"
      /></label>
    </c-space>
    <c-tooltip
      content="This is tooltip content"
      color="#3491FA"
      v-bind="__demoAppearance"
    >
      <c-button>#3491FA</c-button>
    </c-tooltip>
  </c-space>
</template>
