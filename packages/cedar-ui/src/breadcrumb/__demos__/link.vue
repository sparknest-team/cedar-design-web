<script setup lang="ts">
import { ref } from 'vue'

const lastAction = ref('尚未操作')
const record = (label: string) => { lastAction.value = `已选择 ${label}` }
</script>

<template>
  <c-space direction="column">
    <div>纯文本：仅展示路径</div>
    <c-breadcrumb>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item>Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <div>链接：悬停或聚焦查看反馈</div>
    <c-breadcrumb>
      <c-breadcrumb-item href="#/home" @click.prevent="record('Home')">Home</c-breadcrumb-item>
      <c-breadcrumb-item href="#/channel" @click.prevent="record('Channel')">Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <div>点击操作：支持 Enter / 空格</div>
    <c-breadcrumb>
      <c-breadcrumb-item @click="record('Home')">Home</c-breadcrumb-item>
      <c-breadcrumb-item @click="record('Channel')">Channel</c-breadcrumb-item>
      <c-breadcrumb-item>News</c-breadcrumb-item>
    </c-breadcrumb>
    <span role="status">{{ lastAction }}</span>
  </c-space>
</template>
