<template>
  <c-space direction="vertical">
    <c-image width="200" :src="src" :preview-src="previewSrc" />
    <c-button type="primary" @click="previewOpen = true">受控打开预览</c-button>
    <c-image width="200" :src="src" v-model:preview-open="previewOpen" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const previewOpen = ref(false)
const src =
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
const previewSrc =
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp'
</script>
