<template>
  <c-card variant="tonal" size="md">
    <c-page-header title="设计系统" subtitle="项目概览">
      <template #extra><c-button @click="onFollow">关注</c-button></template>
      <span>页头默认透明，可以融入页面背景。</span>
    </c-page-header>
  </c-card>
</template>

<script setup lang="ts">
import { Message } from "@cedarjs/ui";

const onFollow = () => Message.success("已关注项目");
</script>
