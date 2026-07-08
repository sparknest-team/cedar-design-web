<template>
  <c-space direction="column">
    <c-radio-group v-model="variant">
      <c-radio value="default">default</c-radio>
      <c-radio value="outline">outline</c-radio>
    </c-radio-group>
    <c-input-search
      v-model="value"
      :style="{ width: '320px' }"
      placeholder="请输入"
      :recent-searches="recentSearches"
      :variant="variant"
      @search="handleSearch"
    ></c-input-search>
    <c-input-search
      :style="{ width: '320px' }"
      placeholder="请输入"
      :model="model"
      default-field="k2"
      :fields="fields"
      :recent-searches="recentSearches"
      @search="handleSearch"
      :variant="variant"
    ></c-input-search>
    <c-input-search :style="{ width: '320px' }" placeholder="请输入" search-button :variant="variant"></c-input-search>
    <c-input-search
      :style="{ width: '320px' }"
      placeholder="请输入"
      button-text="Search"
      search-button
      :variant="variant"
    ></c-input-search>
    <c-input-search :style="{ width: '320px' }" placeholder="请输入" loading :variant="variant"></c-input-search>
    <c-input-search
      :style="{ width: '320px' }"
      placeholder="请输入"
      search-button
      loading
      :variant="variant"
    ></c-input-search>
    <c-input-search
      :style="{ width: '320px' }"
      placeholder="请输入"
      button-text="Search"
      search-button
      loading
      :variant="variant"
    ></c-input-search>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
const variant = ref('default')
const model = ref<any>({})
const fields = ref<any>([
  { value: 'k1', label: 's1' },
  { value: 'k2', label: 's2' },
  { value: 'k3', label: 's3' },
])

const recentSearches = ref<string[]>(['1', '2', '4'])
const handleSearch = (data: {
  modelField?: string
  modelValue?: string
  model: Record<string, any>
  recentSearches: string[]
}) => {
  console.log('handleSearch---data', data)
  console.log('value', value.value)
  console.log('recentSearches', data.recentSearches)
}
</script>
