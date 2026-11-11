<script setup lang="ts">
import { ref } from 'vue'
import type { SearchResult } from '@cedar-design/ui-vue'
const keyword = ref('')
const submitted = ref('')
function onSearch(result: SearchResult) { submitted.value = result.modelValue }
</script>
<template>
  <c-search v-model="keyword" placeholder="Enter keywords and press Enter" @search="onSearch" />
  <p role="status">Submitted: {{ submitted || 'No search yet' }}</p>
</template>
