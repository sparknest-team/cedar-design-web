<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NavMenuKey, NavMenuOption } from '..'

const categories: NavMenuOption[] = [
  { key: 'design', label: '设计资源' },
  { key: 'development', label: '开发工具' },
  { key: 'document', label: '文档资料' },
]
const regions: NavMenuOption[] = [
  { key: 'east', label: '华东' },
  { key: 'south', label: '华南' },
  { key: 'north', label: '华北' },
]

const category = ref<NavMenuKey | null>('design')
const region = ref<NavMenuKey | null>('east')
const categoryLabel = computed(
  () => categories.find(option => option.key === category.value)?.label ?? '未选择',
)
const regionLabel = computed(
  () => regions.find(option => option.key === region.value)?.label ?? '未选择',
)
</script>

<template>
  <div class="item-label-independent-demo">
    <c-nav-menu mode="horizontal">
      <c-nav-menu-item v-model="category" label="选择分类" :options="categories" />
      <c-nav-menu-item v-model="region" label="选择地区" :options="regions" />
    </c-nav-menu>

    <div class="item-label-independent-demo__status" aria-live="polite">
      <p><strong>分类：</strong>{{ categoryLabel }}</p>
      <p><strong>地区：</strong>{{ regionLabel }}</p>
    </div>

    <c-space>
      <c-button :disabled="category === null" @click="category = null">清空分类</c-button>
      <c-button :disabled="region === null" @click="region = null">清空地区</c-button>
    </c-space>

    <p class="item-label-independent-demo__tip">
      两个 Item 未设置 name，各自根据选中值更新标题和高亮，互不清除；面板仍互斥展开。
    </p>
  </div>
</template>

<style scoped>
.item-label-independent-demo {
  display: grid;
  gap: 16px;
  min-height: 180px;
}

.item-label-independent-demo__status {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.item-label-independent-demo__status p,
.item-label-independent-demo__tip {
  margin: 0;
}

.item-label-independent-demo__tip {
  color: var(--c-color-text-3);
}
</style>
