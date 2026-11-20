<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({
  variant: "tonal",
  status: "default",
});

import { computed as demoComputed, ref as demoRef } from "vue";
const demoCompareFields = [
  { name: "variant", values: ["tonal", "outline", "standard"] },
  {
    name: "status",
    values: ["info", "success", "warning", "danger", "default"],
  },
];
const demoCompareAxis = demoRef("variant");
const demoComparedOptions = demoComputed(
  () =>
    demoCompareFields.find((field) => field.name === demoCompareAxis.value)
      ?.values ?? [],
);
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="variant">
        <c-radio-group
          v-model="__demoAppearance['variant']"
          aria-label="variant"
          :options="[
            { label: 'tonal', value: 'tonal' },
            { label: 'outline', value: 'outline' },
            { label: 'standard', value: 'standard' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="status">
        <c-radio-group
          v-model="__demoAppearance['status']"
          aria-label="status"
          :options="[
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
            { label: 'default', value: 'default' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
    </c-form>
    <p class="demo-config-comparison-hint">Compare one dimension while keeping the other settings and content identical. Input specimens share the same value.</p>
    <c-radio-group
      v-model="demoCompareAxis"
      aria-label="Compare configuration"
      :options="
        demoCompareFields.map((field) => ({
          label: field.name,
          value: field.name,
        }))
      "
    />
    <div class="demo-config-comparison">
      <section v-for="sample in demoComparedOptions" :key="String(sample)">
        <p>
          <code>{{ demoCompareAxis }}={{ sample }}</code>
        </p>
        <c-alert v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
          >This is an info alert.</c-alert
        >
      </section>
    </div>
  </c-space>
</template>

<style scoped>
.demo-config-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 20px;
  min-width: 0;
  max-width: 100%;
}
.demo-config-comparison > section {
  min-width: 0;
}
.demo-config-comparison p {
  margin: 0 0 8px;
}
</style>
