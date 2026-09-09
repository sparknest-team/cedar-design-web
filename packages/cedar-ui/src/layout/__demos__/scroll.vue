<template>
  <c-layout class="scroll-layout">
    <c-layout-header bordered class="bar">
      固定头部
      <c-button
        size="sm"
        @click="content?.scrollTo({ top: 0, behavior: 'smooth' })"
        >回到顶部</c-button
      >
    </c-layout-header>
    <c-layout-content ref="content" scrollable @scroll="onScroll">
      <div v-for="item in 30" :key="item" class="row">
        内容 {{ item }} · 只有内容区域滚动
      </div>
    </c-layout-content>
    <c-layout-footer bordered class="bar"
      >固定底部 · 已滚动 {{ offset }}px</c-layout-footer
    >
  </c-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { LayoutContentInstance } from "../index";
const content = ref<LayoutContentInstance>();
const offset = ref(0);
const onScroll = (event: Event) => {
  offset.value = Math.round((event.target as HTMLElement).scrollTop);
};
</script>
<style scoped>
.scroll-layout {
  height: 320px;
  background: var(--c-color-bg-2);
}
.bar {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.row {
  padding: 16px;
  border-bottom: 1px solid var(--c-color-border-2);
}
</style>
