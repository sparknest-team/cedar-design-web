<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'preview-1', name: 'cat.jpg', url: '/upload-cat.jpg', status: 'success', percent: 100 },
  { uid: 'preview-2', name: 'video-cover.jpg', url: '/upload-cover.jpg', status: 'success', percent: 100 },
])
const preview = (file: UploadFileItem, event: MouseEvent) => {
  event.preventDefault()
  window.open(file.url, '_blank', 'noopener,noreferrer')
}
</script>

<template><c-upload v-model:file-list="files" list-type="picture-card" @preview="preview" /></template>
