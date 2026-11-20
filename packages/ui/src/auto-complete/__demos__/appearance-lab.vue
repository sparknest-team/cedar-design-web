<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref("研发");
const options = [{ value: "研发" }, { value: "研发平台" }, { value: "设计" }];
const __demoAppearance = __demoReactive({ variant: "filled", size: "md" });

import { computed as demoComputed, ref as demoRef } from "vue";
const demoCompareFields = [
  { name: "variant", values: ["filled", "outline", "standard"] },
  { name: "size", values: ["xs", "sm", "md", "lg", "xl"] },
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
            { label: 'filled', value: 'filled' },
            { label: 'outline', value: 'outline' },
            { label: 'standard', value: 'standard' },
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
            { label: 'xs', value: 'xs' },
            { label: 'sm', value: 'sm' },
            { label: 'md', value: 'md' },
            { label: 'lg', value: 'lg' },
            { label: 'xl', value: 'xl' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
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
        <c-auto-complete
          v-model="value"
          :options="options"
          clearable
          v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
        ></c-auto-complete>
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
