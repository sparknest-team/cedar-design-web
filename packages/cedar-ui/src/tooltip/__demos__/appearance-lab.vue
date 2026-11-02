<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({ status: "default", size: "md" });

import { computed as demoComputed, ref as demoRef } from 'vue'
const demoCompareFields = [{"name":"status","values":["default","primary","info","success","warning","danger"]},{"name":"size","values":["xs","md"]}]
const demoCompareAxis = demoRef("status")
const demoComparedOptions = demoComputed(() => demoCompareFields.find(field => field.name === demoCompareAxis.value)?.values ?? [])
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="status">
        <c-select
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
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="size">
        <c-radio-group
          v-model="__demoAppearance['size']"
          aria-label="size"
          :options="[
            { label: 'xs', value: 'xs' },
            { label: 'md', value: 'md' },
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
<c-tooltip
      content="This is tooltip content"
      color="#3491FA"
      v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
    >
      <c-button>#3491FA</c-button>
    </c-tooltip>
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
