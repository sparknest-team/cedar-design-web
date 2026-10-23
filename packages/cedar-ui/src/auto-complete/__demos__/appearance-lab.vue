<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("研发");
const options = [{ value: "研发" }, { value: "研发平台" }, { value: "设计" }];
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
    <c-auto-complete
      v-model="value"
      :options="options"
      clearable
      v-bind="__demoAppearance"
    ></c-auto-complete>
  </c-space>
</template>
