<template>
  <c-card variant="outline" size="md">
    <c-page-header
      show-back
      title="设计系统"
      subtitle="项目概览"
      @back="onBack"
    >
      <template #header>
        <c-breadcrumb>
          <c-breadcrumb-item>工作台</c-breadcrumb-item>
          <c-breadcrumb-item>项目</c-breadcrumb-item>
        </c-breadcrumb>
      </template>
      <template #avatar
        ><c-avatar shape="square" :size="40">D</c-avatar></template
      >
      <template #extra>
        <c-space size="sm" wrap>
          <c-button @click="onFollow">关注</c-button>
          <c-button status="primary" @click="onCreate">创建任务</c-button>
        </c-space>
      </template>
      <c-row :gutter="[24, 24]" align="center" justify="space-between">
        <c-col :xs="24" :lg="14">
          <c-space direction="column" size="lg">
            <span>统一设计规范与组件资源，帮助团队高效协作。</span>
            <c-descriptions :column="2" size="sm">
              <c-descriptions-item label="负责人">林晓</c-descriptions-item>
              <c-descriptions-item label="所属团队"
                >设计平台</c-descriptions-item
              >
            </c-descriptions>
          </c-space>
        </c-col>
        <c-col :xs="24" :lg="8">
          <c-grid :cols="3" :col-gap="24">
            <c-grid-item
              ><c-statistic title="组件" :value="48" tabular-nums
            /></c-grid-item>
            <c-grid-item
              ><c-statistic title="进行中" :value="12" tabular-nums
            /></c-grid-item>
            <c-grid-item
              ><c-statistic title="成员" :value="8" tabular-nums
            /></c-grid-item>
          </c-grid>
        </c-col>
      </c-row>
      <template #footer>
        <c-divider :spacing="[0, 16]" />
        <c-space justify="space-between" size="sm" wrap>
          <small>项目编号 DS-001</small>
          <small>最近更新：今天</small>
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
