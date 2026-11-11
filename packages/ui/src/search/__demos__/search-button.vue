<script setup lang="ts">
import { ref } from 'vue'
import type { SearchResult } from '@cedar-design/ui-vue'
const keyword = ref('')
const submitted = ref('')
function onSearch(result: SearchResult) { submitted.value = result.modelValue }
</script>
<template>
  <c-search v-model="keyword" search-button button-text="查询" placeholder="点击查询按钮提交" @search="onSearch" />
  <p role="status">已提交：{{ submitted || '尚未搜索' }}</p>
</template>
