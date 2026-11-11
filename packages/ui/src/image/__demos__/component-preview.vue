<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <c-space direction="column" :size="16">
    <c-button status="primary" size="sm" @click="open = true">打开单图预览</c-button>
    <c-image-preview v-model:open="open" src="/cat.jpg" />
  </c-space>
</template>
