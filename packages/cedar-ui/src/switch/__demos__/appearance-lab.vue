<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref(false);
const __demoAppearance = __demoReactive({ variant: "circle", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'circle', value: 'circle' },
            { label: 'round', value: 'round' },
            { label: 'line', value: 'line' },
            { label: 'tonal', value: 'tonal' },
          ]"
          aria-label="variant"
      /></label>
      <label
        >size<c-select
          v-model="__demoAppearance['size']"
          :clearable="false"
          :options="[
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
          ]"
          aria-label="size"
      /></label>
    </c-space>
    <c-switch v-model="value" v-bind="__demoAppearance"></c-switch>
  </c-space>
</template>
