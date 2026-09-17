<script setup lang="ts">
import { ref } from 'vue'

const previewOpen = ref(false)
</script>

<template>
  <c-space direction="column" :size="16">
    <c-image width="160" height="120" object-fit="cover" src="/cat.jpg" preview-src="/cat2.jpg" />
    <c-button status="primary" size="sm" @click="previewOpen = true">打开预览</c-button>
    <c-image
      v-model:preview-open="previewOpen"
      width="160"
      height="120"
      object-fit="cover"
      src="/cat.jpg"
      :preview-props="{ scaleStep: 1 }"
    />
  </c-space>
</template>
