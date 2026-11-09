<template>
  <c-card variant="outline" size="md">
    <c-page-header
      show-back
      back-button-aria-label="返回项目列表"
      subtitle="项目概览"
      @back="onBack"
    >
      <template #title><h2 style="margin: 0; font: inherit">设计系统</h2></template>
      <template #extra>
        <c-space size="sm" wrap>
          <c-button @click="onFollow">关注</c-button>
          <c-button status="primary" @click="onCreate">创建任务</c-button>
        </c-space>
      </template>
    </c-page-header>
  </c-card>
</template>

<script setup lang="ts">
import { Message } from "@cedar-design/ui";

const onBack = () => Message.info("点击返回");
const onFollow = () => Message.success("已关注项目");
const onCreate = () => Message.info("点击创建任务");
</script>
