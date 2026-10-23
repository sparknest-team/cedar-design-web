<script setup>
import { reactive as __demoReactive } from "vue";

const __demoAppearance = __demoReactive({ variant: "line", size: "md" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >variant<c-select
          v-model="__demoAppearance['variant']"
          :clearable="false"
          :options="[
            { label: 'line', value: 'line' },
            { label: 'card', value: 'card' },
            { label: 'outline', value: 'outline' },
            { label: 'plain', value: 'plain' },
            { label: 'capsule', value: 'capsule' },
            { label: 'enclosed', value: 'enclosed' },
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
    <c-tabs default-active="overview" v-bind="__demoAppearance">
      <c-tab-pane key="overview" title="概览">概览内容</c-tab-pane>
      <c-tab-pane key="details" title="详情">详情内容</c-tab-pane>
      <c-tab-pane key="settings" title="设置">设置内容</c-tab-pane>
    </c-tabs>
  </c-space>
</template>
