<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const current = ref(1)
const images = ['/cat.jpg', '/cat2.jpg']
</script>

<template>
  <c-space direction="column" :size="16">
    <c-button status="primary" size="sm" @click="open = true">打开预览组</c-button>
    <c-image-preview-group v-model:open="open" v-model:current="current" :images="images" :loop="false" />
  </c-space>
</template>
