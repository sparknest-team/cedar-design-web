<script setup lang="ts">
import { reactive as __demoReactive } from "vue";
import { ref } from "vue";
const open = ref(false);
const __demoAppearance = __demoReactive({
  variant: "neutral",
  status: "default",
});

import { computed as demoComputed, ref as demoRef } from 'vue'
const demoCompareFields = [{"name":"variant","values":["neutral","tonal","solid"]},{"name":"status","values":["default","info","success","warning","danger","loading"]}]
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
            { label: 'neutral', value: 'neutral' },
            { label: 'tonal', value: 'tonal' },
            { label: 'solid', value: 'solid' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="status">
        <c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'info', value: 'info' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
            { label: 'loading', value: 'loading' },
          ]"
          aria-label="status"
        />
      </c-form-item>
    </c-form>
    <p class="demo-config-comparison-hint"><span lang="zh-CN">选择一个对比维度；其他配置和内容保持一致。输入类示例共享同一个值，便于比较外观。</span><span lang="en-US">Compare one dimension while keeping the other settings and content identical. Input specimens share the same value.</span></p>
<c-radio-group v-model="demoCompareAxis" aria-label="Compare configuration" :options="demoCompareFields.map(field => ({ label: field.name, value: field.name }))" />
<c-space wrap><c-button v-for="sample in demoComparedOptions" :key="String(sample)" @click="() => { __demoAppearance[demoCompareAxis] = sample; open = true }">{{ demoCompareAxis }}={{ sample }}</c-button></c-space>
<c-message
      v-model:open="open"
      status="success"
      position="center"
      closable
      :duration="0"
      v-bind="__demoAppearance"
    >
      Declarative message
      <template #action>
        <c-button size="sm" variant="text" @click="open = false"
          >Close</c-button
        >
      </template>
    </c-message>
  </c-space>
</template>

<style scoped>
.demo-config-comparison { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 20px; min-width: 0; max-width: 100%; }
.demo-config-comparison > section { min-width: 0; }
.demo-config-comparison p { margin: 0 0 8px; }
html:not([lang='en-US']) .demo-config-comparison-hint > [lang='en-US'],
html[lang='en-US'] .demo-config-comparison-hint > [lang='zh-CN'] { display: none; }
</style>
