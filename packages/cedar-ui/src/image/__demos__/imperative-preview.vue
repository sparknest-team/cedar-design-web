<script setup lang="ts">
const images = ['/cat.jpg', '/cat2.jpg']
let handle: { next: () => void; close: () => void } | undefined

function previewSingle() {
  imagePreview(images[0])
}

function previewMultiple() {
  handle = imagePreview({ images, modelValue: 1 })
}

function next() {
  handle?.next()
}

function close() {
  handle?.close()
}
</script>

<template>
  <c-space :size="12" wrap>
    <c-button status="primary" size="sm" @click="previewSingle">预览单图</c-button>
    <c-button status="primary" size="sm" @click="previewMultiple">预览多图</c-button>
    <c-button size="sm" @click="next">下一张</c-button>
    <c-button size="sm" @click="close">关闭</c-button>
  </c-space>
</template>
