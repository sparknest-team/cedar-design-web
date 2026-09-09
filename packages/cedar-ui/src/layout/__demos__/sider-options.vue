<template>
  <div class="controls">
    <c-radio-group v-model="placement"
      ><c-radio value="left">左侧</c-radio
      ><c-radio value="right">右侧</c-radio></c-radio-group
    >
    <c-radio-group v-model="mode"
      ><c-radio value="width">宽度折叠</c-radio
      ><c-radio value="transform">位移折叠</c-radio></c-radio-group
    >
    <label>完全收起 <c-switch v-model="zero" /></label>
    <c-button size="sm" @click="collapsed = !collapsed">{{
      collapsed ? "展开" : "收起"
    }}</c-button>
  </div>
  <c-layout has-sider class="options-layout">
    <c-layout-sider
      v-model:collapsed="collapsed"
      :placement="placement"
      :collapse-mode="mode"
      :collapsed-width="zero ? 0 : 48"
      :width="200"
      bordered
      collapsible
    >
      <div v-for="item in 12" :key="item" class="item">
        {{ item }} · 项目导航和工作空间
      </div>
    </c-layout-sider>
    <c-layout-content scrollable class="content">
      <h4>内容区域</h4>
      <p>切换左右位置和折叠方式。完全收起后仍可通过边缘按钮展开。</p>
      <p>Tab 可聚焦折叠按钮，Enter 或空格可切换状态。</p>
    </c-layout-content>
  </c-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
const placement = ref<"left" | "right">("left");
const mode = ref<"width" | "transform">("width");
const collapsed = ref(false);
const zero = ref(false);
</script>
<style scoped>
.controls {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  align-items: center;
}
.controls label {
  display: flex;
  align-items: center;
  gap: 8px;
}
.options-layout {
  height: 300px;
  background: var(--c-color-bg-2);
}
.item {
  padding: 16px;
}
.content {
  padding: 16px;
}
</style>
