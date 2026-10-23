<script setup lang="ts">
import { ref } from 'vue'
const category = ref<string | number | null>(null)
const filtered = ref(false)
const keyword = ref('')
const options = [{ key: 0, label: '全部分类' }, { key: 'design', label: '设计' }, { key: 'development', label: '开发' }]
</script>
<template>
  <c-nav-menu mode="horizontal">
    <c-nav-menu-item v-model="category" label="分类" :options="options" />
    <c-nav-menu-item label="分类通栏" :options="options" popup-layout="full-width" options-mode="horizontal" />
    <c-nav-menu-item label="高级筛选" :active="filtered" popup-layout="full-width" :hide-on-select="false">
      <template #content="{ select, close }">
        <c-space direction="column">
          <c-input v-model="keyword" placeholder="输入筛选关键词" />
          <c-space>
            <c-button @click="filtered = !!keyword; select(keyword); close()">应用筛选</c-button>
            <c-button @click="keyword = ''; filtered = false; select(null); close()">重置</c-button>
          </c-space>
        </c-space>
      </template>
    </c-nav-menu-item>
    <c-nav-menu-item label="筛选面板" popup-layout="full-height" :popup-style="{ width: 'min(480px, 100vw)' }">
      <template #content="{ close }">
        <c-space direction="column"><h3>自定义全高面板</h3><p>这里可以放置任意筛选表单或分组内容。</p><c-button @click="close">关闭</c-button></c-space>
      </template>
    </c-nav-menu-item>
  </c-nav-menu>
</template>
