<template>
  <c-space size="sm">
    <c-link loading>加载中</c-link>
    <c-link :loading="loading" @click="handleClick">点击加载</c-link>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 3000)
}
</script>
