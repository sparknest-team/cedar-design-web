<template>
  <c-card variant="outline" size="md">
    <c-page-header
      show-back
      title="设计系统"
      subtitle="项目概览"
      @back="onBack"
    >
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
import { Message } from "@cedarjs/ui";

const onBack = () => Message.info("点击返回");
const onFollow = () => Message.success("已关注项目");
const onCreate = () => Message.info("点击创建任务");
</script>
