<script setup lang="ts">
import { ref } from 'vue'
import type { SearchResult } from '@cedar-design/ui-vue'
const keyword = ref('')
const submitted = ref('')
function onSearch(result: SearchResult) { submitted.value = result.modelValue }
</script>
<template>
  <c-search v-model="keyword" placeholder="输入关键词后按 Enter" @search="onSearch" />
  <p role="status">已提交：{{ submitted || '尚未搜索' }}</p>
</template>
