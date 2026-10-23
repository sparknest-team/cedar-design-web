<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref(3);
const __demoAppearance = __demoReactive({ variant: "filled", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'filled', value: 'filled' },
            { label: 'outline', value: 'outline' },
            { label: 'standard', value: 'standard' },
          ]"
          aria-label="variant"
      /></label>
      <label
        >size<c-select
          v-model="__demoAppearance['size']"
          :clearable="false"
          :options="[
            { label: 'xs', value: 'xs' },
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
          ]"
          aria-label="size"
      /></label>
    </c-space>
    <c-input-number
      v-model="value"
      :min="0"
      :max="10"
      v-bind="__demoAppearance"
    ></c-input-number>
  </c-space>
</template>
