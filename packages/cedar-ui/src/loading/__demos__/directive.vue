<template>
  <c-space direction="vertical">
    <h4>简单用法</h4>
    <c-switch v-model="simpleLoading" />
    <c-card
      v-c-loading="simpleLoading"
      title="介绍"
      description="v-c-loading 会在当前容器内渲染 Loading 遮罩，不会改变内容结构。"
    />

    <h4>复杂配置</h4>
    <c-switch v-model="configuredLoading" />
    <c-card
      v-c-loading="{
        loading: configuredLoading,
        tip: '加载中...',
        color: 'var(--c-color-primary)',
        background: 'color-mix(in srgb, var(--c-color-bg-1) 72%, transparent)',
      }"
      title="介绍"
      description="v-c-loading 会在当前容器内渲染 Loading 遮罩，不会改变内容结构。"
    />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const simpleLoading = ref(false);
const configuredLoading = ref(false);
</script>
