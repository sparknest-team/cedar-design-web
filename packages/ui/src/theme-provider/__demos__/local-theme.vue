<script setup lang="ts">

import { ref } from "vue";
const theme = ref<"light" | "dark">("dark");
</script>
<template>
  <div>
    <c-button @click="theme = theme === 'dark' ? 'light' : 'dark'">切换局部主题</c-button>
    <c-theme-provider :theme="theme" class="theme-region">
      <p>外层主题 {{ theme }}</p>
      <c-button status="primary">主题按钮</c-button>
      <c-form-item layout="vertical" hide-label>
        <c-select
          :options="[{ label: 'Body popup inherits theme', value: 1 }]"
          placeholder="打开弹层"
        />
      </c-form-item>
      <c-theme-provider theme="light" class="theme-region">
        <p>嵌套亮色</p>
        <c-button variant="outline">亮色按钮</c-button>
      </c-theme-provider>
    </c-theme-provider>
    <p>外部保持原主题</p>
  </div>
</template>
<style scoped>
.theme-region {
  margin-top: 16px;
  padding: 16px;
  color: var(--c-color-text-1);
  background: var(--c-color-bg-2);
  border: 1px solid var(--c-color-border-2);
}
</style>
