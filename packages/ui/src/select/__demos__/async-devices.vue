<script setup lang="ts">
import { ref } from 'vue'
const value = ref([2])
const options = ref<{ id: number; name: string; disabled?: boolean }[]>([])
const loading = ref(false)
async function load() {
  loading.value = true
  try {
    options.value = await Promise.resolve(Array.from({ length: 200 }, (_, index) => ({
      id: index + 1, name: `设备 ${index + 1}`, disabled: index === 3,
    })))
  } finally { loading.value = false }
}
</script>
<template>
  <c-space direction="column" :size="16">
    <c-button @click="load">加载设备列表</c-button>
    <c-select v-model="value" :options="options" :loading="loading"
      :field-names="{ label: 'name', value: 'id' }" :virtual-list-props="{ height: 180 }"
      :limit="3" multiple filterable clearable placeholder="最多选择三个设备" />
    <p>已提交 ID：{{ value }}。加载前显示 ID，加载后自动回显名称。</p>
  </c-space>
</template>
