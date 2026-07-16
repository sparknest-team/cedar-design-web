<template>
  <c-space direction="vertical">
    <c-button type="primary" @click="previewSingle">命令式预览单图</c-button>
    <c-button type="primary" @click="previewMultiple">命令式预览多图</c-button>
  </c-space>
</template>

<script lang="ts" setup>
import { previewImage } from '@cedar/ui'

const images = [
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
]

function previewSingle() {
  previewImage(images[0])
}

function previewMultiple() {
  previewImage({
    images,
    current: 1,
  })
}
</script>
