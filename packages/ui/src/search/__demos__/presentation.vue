<script setup lang="ts">
import { IconSearch } from '@cedar-design/icons-vue/icon-search'
import { ref } from 'vue'
import type { SearchResult } from '@cedar-design/ui-vue'

const clickToEdit = ref(false)
const keyword = ref('')
const history = ref(['项目 A', '设备 B'])
const lastAction = ref('尚未搜索')
function recordSearch(result: SearchResult) {
  history.value = result.recentSearches
  lastAction.value = result.modelValue ?? ''
}
function recordAction(result: SearchResult) {
  lastAction.value = result.modelValue ?? ''
}
</script>
<template>
  <div class="search-demo">
    <c-checkbox v-model="clickToEdit">单击编辑关键词</c-checkbox>
    <c-search
      v-model="keyword"
      :edit-mode="clickToEdit ? 'click' : 'direct'"
      :recent-searches="history"
      label="资源"
      placeholder="输入资源名称"
      clearable
      show-action
      action-text="取消"
      @cancel="lastAction = '已取消'"
      @search="recordSearch"
    />
    <c-search
      v-model="keyword"
      search-button
      :button-props="{ variant: 'outline' }"
      placeholder="自定义按钮插槽"
      @search="recordAction"
    >
      <template #button-icon><IconSearch aria-hidden="true" /></template>
      <template #button-default>查找</template>
    </c-search>
    <div>最近操作：{{ lastAction }}</div>
  </div>
</template>
<style scoped>
.search-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 100%;
}
</style>
