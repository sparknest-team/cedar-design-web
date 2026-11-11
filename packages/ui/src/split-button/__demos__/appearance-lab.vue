<script setup lang="ts">
import { reactive } from "vue";
import type { ComponentSize, SemanticStatus } from "../../_utils/constant";
import { Message } from "@cedar-design/ui-vue";
const publish = () => {
  Message.info("发布成功");
};
const handleSelect = (_value: unknown, option: { label?: unknown }) => {
  Message.info(String(option.label));
};
const __demoAppearance = reactive<{ status: SemanticStatus; size: ComponentSize }>({
  status: "default",
  size: "md",
});

import { computed as demoComputed, ref as demoRef } from 'vue'

const demoCompareFields = [{"name":"status","values":["default","primary","secondary","tertiary","info","success","warning","danger"]},{"name":"size","values":["xs","sm","md","lg","xl"]}]
const demoCompareAxis = demoRef("status")
const demoComparedOptions = demoComputed(() => demoCompareFields.find(field => field.name === demoCompareAxis.value)?.values ?? [])
</script>
<template>
  <c-space direction="column" align="flex-start" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="status">
        <c-select
          v-model="__demoAppearance['status']"
          :clearable="false"
          :options="[
            { label: 'default', value: 'default' },
            { label: 'primary', value: 'primary' },
            { label: 'secondary', value: 'secondary' },
            { label: 'tertiary', value: 'tertiary' },
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
    <p class="demo-config-comparison-hint"><span lang="zh-CN">选择一个对比维度；其他配置和内容保持一致。输入类示例共享同一个值，便于比较外观。</span><span lang="en-US">Compare one dimension while keeping the other settings and content identical. Input specimens share the same value.</span></p>
<c-radio-group v-model="demoCompareAxis" aria-label="Compare configuration" :options="demoCompareFields.map(field => ({ label: field.name, value: field.name }))" />
<div class="demo-config-comparison">
<section v-for="sample in demoComparedOptions" :key="String(sample)">
<p><code>{{ demoCompareAxis }}={{ sample }}</code></p>
<c-split-button
      placement="bottom-end"
      @click="publish"
      @select="handleSelect"
      v-bind="{ ...__demoAppearance, [demoCompareAxis]: sample }"
    >
      发布

      <template #content>
        <c-menu-option label="保存草稿" value="draft" />
        <c-menu-option label="保存并发布" value="publish" />
        <c-menu-option label="暂无权限" value="restricted" disabled />
      </template>
    </c-split-button>
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
