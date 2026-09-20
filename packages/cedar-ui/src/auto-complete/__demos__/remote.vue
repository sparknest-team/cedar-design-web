<template>
  <c-auto-complete
    v-model="value"
    :options="options"
    :filter-option="false"
    placeholder="输入关键字获取远程建议"
    style="width: 320px"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const options = ref<string[]>([])

const handleSearch = (keyword: string) => {
  options.value = keyword ? Array.from({ length: 4 }, (_, index) => `${keyword}-${index + 1}`) : []
}
</script>
