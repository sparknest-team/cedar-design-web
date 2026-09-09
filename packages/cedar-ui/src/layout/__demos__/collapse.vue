<template>
  <c-layout class="collapse-layout" has-sider>
    <c-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="sider-content">{{ collapsed ? '导航' : '侧栏导航区域' }}</div>
    </c-layout-sider>
    <c-layout>
      <c-layout-header class="header">可折叠侧栏</c-layout-header>
      <c-layout-content class="content">
        <c-button @click="collapsed = !collapsed">{{ collapsed ? '展开侧栏' : '收起侧栏' }}</c-button>
        <p>侧栏和内容区共享可用高度，底部触发器保持在侧栏底部。</p>
      </c-layout-content>
    </c-layout>
  </c-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const collapsed = ref(false)
</script>

<style scoped>
.collapse-layout { height: 300px; background: var(--c-color-bg-2); }
.sider-content, .header, .content { padding: 16px; }
.header { background: var(--c-color-bg-3); }
</style>
