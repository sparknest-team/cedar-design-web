<!--
  Sticky 滚动吸附（指定容器）
  ----------------------------------------------------------------
  演示 Breadcrumb 在指定滚动容器内的吸附行为。底层使用 <CAffix> 包装。
-->
<template>
  <div class="container" ref="container">
    <div>
      <c-breadcrumb :sticky="true" :target="container">
        <c-breadcrumb-item>11</c-breadcrumb-item>
        <c-breadcrumb-item>Channel</c-breadcrumb-item>
        <c-breadcrumb-item>News</c-breadcrumb-item>
      </c-breadcrumb>
      <div class="demo"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const container = ref(null)
</script>

<style scoped lang="scss">
.container {
  height: 300px;
  overflow: auto;
  background-color: var(--bg-1);
}
.demo {
  width: 100%;
  height: 400px;
}
</style>
