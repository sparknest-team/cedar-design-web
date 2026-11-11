<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '@cedar-design/use-vue'
const value = ref('mengshuai')
// A shared business function can be imported and reused in other fields.
const loadPeople = async () => {
  await new Promise(resolve => setTimeout(resolve, 200))
  return [{ value: 'mengshuai', label: '孟帅' }, { value: 'wujiaming', label: '吴甲明' }]
}
const { data: options, loading, error, refresh } = useAsyncData(loadPeople, {
  initialData: [] as { value: string; label: string }[],
})
</script>
<template>
  <c-space direction="column">
    <c-select v-model="value" :options="options" :loading="loading" filterable />
    <p v-if="error" role="alert">加载失败，请重试。</p>
    <c-button @click="refresh()">重新加载</c-button>
  </c-space>
</template>
