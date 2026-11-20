<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({ variant: "default", size: "md" });

import { computed as demoComputed, ref as demoRef } from "vue";
const demoCompareFields = [
  { name: "variant", values: ["default", "outline", "tonal"] },
  { name: "size", values: ["sm", "md"] },
];
const demoCompareAxis = demoRef("variant");
const demoComparedOptions = demoComputed(
  () =>
    demoCompareFields.find((field) => field.name === demoCompareAxis.value)
      ?.values ?? [],
);

__demoAppearance["elevation"] = 2;
demoCompareFields.push({ name: "elevation", values: [0, 2, 6] });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="variant">
        <c-radio-group
          v-model="__demoAppearance['variant']"
          aria-label="variant"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'outline', value: 'outline' },
            { label: 'tonal', value: 'tonal' },
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
      <c-form-item label="elevation"
        ><c-radio-group
          v-model="__demoAppearance['elevation']"
          aria-label="elevation"
          :options="[
            { label: '0', value: 0 },
            { label: '2', value: 2 },
            { label: '6', value: 6 },
          ]"
      /></c-form-item>
    </c-form>
    <p class="demo-config-comparison-hint">选择一个对比维度；其他配置和内容保持一致。输入类示例共享同一个值，便于比较外观。</p>
    <c-radio-group
      v-model="demoCompareAxis"
      aria-label="对比配置"
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
        <c-card
          title="Project overview"
          description="Keep the team informed."
          v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
        />
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
