<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({ variant: "default", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'outline', value: 'outline' },
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
          ]"
          aria-label="size"
      /></label>
    </c-space>
    <c-card
      title="Project overview"
      description="Keep the team informed."
      v-bind="__demoAppearance"
    />
  </c-space>
</template>
