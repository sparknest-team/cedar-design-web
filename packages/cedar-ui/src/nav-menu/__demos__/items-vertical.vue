<script setup lang="ts">
import { computed, ref } from 'vue'
import type { NavMenuKey, NavMenuOption } from '../types'

const section = ref('overview')
const project = ref<NavMenuKey | null>(null)
const keyword = ref('')
const appliedKeyword = ref('')
const projects: NavMenuOption[] = [
  { key: 'website', label: '官网改版' },
  { key: 'dashboard', label: '数据平台' },
  { key: 'archived', label: '已归档项目', disabled: true },
]
const projectLabel = computed(() => projects.find(item => item.key === project.value)?.label ?? '未选择')
</script>

<template>
  <div class="vertical-items-demo">
    <c-nav-menu mode="vertical" class="vertical-items-demo__menu">
      <c-nav-menu-item label="工作概览" :active="section === 'overview'" @click="section = 'overview'" />
      <c-nav-menu-item label="我的任务" :active="section === 'tasks'" @click="section = 'tasks'" />
      <c-nav-menu-item
        v-model="project"
        label="选择项目"
        :options="projects"
        options-mode="vertical"
        placement="right-start"
      />
      <c-nav-menu-item
        label="高级筛选"
        :active="!!appliedKeyword"
        popup-layout="full-height"
        placement="right-start"
        :popup-style="{ width: 'min(360px, 100vw)' }"
      >
        <template #content="{ close }">
          <c-space direction="vertical" style="width: 100%; height: 100%">
            <h3>任务筛选</h3>
            <p>应用后高亮入口，保留“高级筛选”标题。</p>
            <c-input v-model="keyword" placeholder="输入任务关键词" aria-label="任务关键词" />
            <c-space>
              <c-button @click="appliedKeyword = keyword.trim(); close()">应用</c-button>
              <c-button @click="keyword = ''; appliedKeyword = ''; close()">重置</c-button>
              <c-button @click="close()">关闭</c-button>
            </c-space>
          </c-space>
        </template>
      </c-nav-menu-item>
    </c-nav-menu>
    <div aria-live="polite">
      <h3>{{ section === 'overview' ? '工作概览' : '我的任务' }}</h3>
      <p>当前项目：{{ projectLabel }}</p>
      <p>关键词：{{ appliedKeyword || '不限' }}</p>
      <p>页面入口互斥选中，项目和高级筛选独立控制。</p>
    </div>
  </div>
</template>

<style scoped>
.vertical-items-demo { display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start; }
.vertical-items-demo__menu { width: 200px; max-width: 100%; flex: none; }
</style>
