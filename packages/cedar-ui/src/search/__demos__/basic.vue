<template>
  <c-space direction="column">
    <c-radio-group v-model="variant">
      <c-radio value="default">default</c-radio>
      <c-radio value="outline">outline</c-radio>
    </c-radio-group>
    <c-search
      v-model="keyword"
      :style="inputStyle"
      placeholder="请输入 id 或名称"
      :recent-searches="recentSearches"
      :variant="variant"
      clearable
      @search="handleSearch"
    />
    <c-search
      v-model="buttonKeyword"
      :style="inputStyle"
      placeholder="请输入"
      search-button
      :variant="variant"
      @search="handleSearch"
    />
    <c-search
      v-model="textButtonKeyword"
      :style="inputStyle"
      placeholder="请输入"
      button-text="Search"
      search-button
      :variant="variant"
      @search="handleSearch"
    />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SearchResult } from '@cedar/ui'

const inputStyle = { width: '360px' }
const keyword = ref('')
const buttonKeyword = ref('')
const textButtonKeyword = ref('')
const variant = ref('default')
const recentSearches = ref<string[]>(['设备 A', '设备 B', '设备 C'])

function handleSearch(data: SearchResult) {
  recentSearches.value = data.recentSearches
  console.log('search', data)
}
</script>
