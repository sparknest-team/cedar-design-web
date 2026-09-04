<template>
  <c-page-header show-back title="Cedar Design" subtitle="组件库概览" @back="onBack">
    <template #header>
      <c-breadcrumb>
        <c-breadcrumb-item>Home</c-breadcrumb-item>
        <c-breadcrumb-item>Components</c-breadcrumb-item>
      </c-breadcrumb>
    </template>
    <template #avatar><c-avatar>C</c-avatar></template>
    <template #extra><c-button status="primary">操作</c-button></template>
    <p>默认插槽用于承载与当前页面相关的摘要、统计信息或其他内容。</p>
    <template #footer>最近更新：今天</template>
  </c-page-header>
</template>

<script lang="ts" setup>
import { Message } from '@cedarjs/ui'

const onBack = () => Message.info('点击返回')
</script>
