<!--
  Sticky 滚动吸附（body 模式 + 顶部偏移）
  ----------------------------------------------------------------
  演示 Breadcrumb 默认相对 window 吸附时使用 offset-top 留出顶部偏移。底层使用 <CAffix> 包装。
-->
<template>
  <c-breadcrumb sticky :offset-top="100">
    <c-breadcrumb-item>11</c-breadcrumb-item>
    <c-breadcrumb-item>Channel</c-breadcrumb-item>
    <c-breadcrumb-item>News</c-breadcrumb-item>
  </c-breadcrumb>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const container = ref(null)
</script>

<style scoped lang="scss"></style>
