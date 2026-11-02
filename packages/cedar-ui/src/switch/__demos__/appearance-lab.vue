<script setup>
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const value = ref(false);
const __demoAppearance = __demoReactive({ variant: "circle", size: "md" });

import { computed as demoComputed, ref as demoRef } from 'vue'
const demoCompareFields = [{"name":"variant","values":["circle","round","line","tonal"]},{"name":"size","values":["sm","md","lg"]}]
const demoCompareAxis = demoRef("variant")
const demoComparedOptions = demoComputed(() => demoCompareFields.find(field => field.name === demoCompareAxis.value)?.values ?? [])
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="variant">
        <c-radio-group
          v-model="__demoAppearance['variant']"
          aria-label="variant"
          :options="[
            { label: 'circle', value: 'circle' },
            { label: 'round', value: 'round' },
            { label: 'line', value: 'line' },
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
            { label: 'lg', value: 'lg' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
    </c-form>
    <p class="demo-config-comparison-hint"><span lang="zh-CN">选择一个对比维度；其他配置和内容保持一致。输入类示例共享同一个值，便于比较外观。</span><span lang="en-US">Compare one dimension while keeping the other settings and content identical. Input specimens share the same value.</span></p>
<c-radio-group v-model="demoCompareAxis" aria-label="Compare configuration" :options="demoCompareFields.map(field => ({ label: field.name, value: field.name }))" />
<div class="demo-config-comparison">
<section v-for="sample in demoComparedOptions" :key="String(sample)">
<p><code>{{ demoCompareAxis }}={{ sample }}</code></p>
<c-switch v-model="value" v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"></c-switch>
</section>
</div>
  </c-space>
</template>

<style scoped>
.demo-config-comparison { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 20px; min-width: 0; max-width: 100%; }
.demo-config-comparison > section { min-width: 0; }
.demo-config-comparison p { margin: 0 0 8px; }
html:not([lang='en-US']) .demo-config-comparison-hint > [lang='en-US'],
html[lang='en-US'] .demo-config-comparison-hint > [lang='zh-CN'] { display: none; }
</style>
