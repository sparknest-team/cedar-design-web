<script setup lang="ts">
import { useDemoLocale } from "../../__demos__/locale";
const demoCopy = useDemoLocale("comparison");
import { reactive as __demoReactive } from "vue";
const __demoAppearance = __demoReactive({ status: "wait", size: "md" });

import { computed as demoComputed, ref as demoRef } from "vue";
const demoCompareFields = [
  { name: "status", values: ["wait", "process", "finish", "error"] },
  { name: "size", values: ["sm", "md"] },
];
const demoCompareAxis = demoRef("status");
const demoComparedOptions = demoComputed(
  () =>
    demoCompareFields.find((field) => field.name === demoCompareAxis.value)
      ?.values ?? [],
);
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="status">
        <c-radio-group
          v-model="__demoAppearance['status']"
          aria-label="status"
          :options="[
            { label: 'wait', value: 'wait' },
            { label: 'process', value: 'process' },
            { label: 'finish', value: 'finish' },
            { label: 'error', value: 'error' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="size">
        <c-radio-group
          v-model="__demoAppearance['size']"
          aria-label="size"
          :options="[
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
    </c-form>
    <p class="demo-config-comparison-hint">{{ demoCopy.hint }}</p>
    <c-radio-group
      v-model="demoCompareAxis"
      :aria-label="demoCopy.configuration"
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
        <c-steps
          :model-value="2"
          v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
        >
          <c-step>Succeeded</c-step>
          <c-step>Processing</c-step>
          <c-step>Pending</c-step>
        </c-steps>
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
