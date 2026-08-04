<template>
  <c-space direction="column">
    <c-search
      v-model:model-field="modelField"
      :model="model"
      :style="inputStyle"
      :fields="fields"
      :recent-searches="recentSearches"
      :select-style="{ minWidth: '140px' }"
      default-field="name"
      placeholder="请输入搜索内容"
      search-button
      @change="handleChange"
      @search="handleSearch"
    />
    <c-button @click="resetModel">Reset Model</c-button>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SearchResult, SearchField } from '@cedar/ui'

const inputStyle = { width: '420px' }
const modelField = ref('name')
const model = ref<Record<string, any>>({})
const recentSearches = ref<string[]>(['设备 A', '设备 B', '设备 C'])

const fields: SearchField[] = [
  {
    value: 'id',
    label: '设备 ID',
    placeholder: '请输入设备 ID',
  },
  {
    value: 'name',
    label: '设备名称',
    placeholder: '请输入设备名称',
  },
  {
    value: 'desc',
    label: '设备描述',
    placeholder: '请输入设备描述',
  },
]

function handleSearch(data: SearchResult) {
  recentSearches.value = data.recentSearches
  console.log('search', data)
}

function handleChange(value: string) {
  console.log('change', value, model.value)
}

function resetModel() {
  model.value = {}
}
</script>
