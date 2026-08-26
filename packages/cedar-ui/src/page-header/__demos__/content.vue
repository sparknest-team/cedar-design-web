<template>
  <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }">
    <c-page-header
      :style="{ background: 'var(--color-bg-2)' }"
      title="Cedar Design"
      show-back
      @back="onBack"
    >
      <template #breadcrumb>
        <c-breadcrumb>
          <c-breadcrumb-item>Home</c-breadcrumb-item>
          <c-breadcrumb-item>Channel</c-breadcrumb-item>
          <c-breadcrumb-item>News</c-breadcrumb-item>
        </c-breadcrumb>
      </template>
      <template #subtitle>
        <c-space>
          <span>Cedar Design Vue</span>
          <c-tag color="red" size="small">Default</c-tag>
        </c-space>
      </template>
      <template #extra>
        <c-space>
          <c-button>Cancel</c-button>
          <c-button type="primary">Save</c-button>
        </c-space>
      </template>
      <p>页头下方可放置页面说明或正文摘要。</p>
      <p>
        PageHeader 用于内容区顶部的标题结构：面包屑、返回、主/副标题与右侧操作，适合列表页与详情页。
      </p>
    </c-page-header>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@cedarjs/ui'

const onBack = () => {
  Message.info('点击返回')
}
</script>
