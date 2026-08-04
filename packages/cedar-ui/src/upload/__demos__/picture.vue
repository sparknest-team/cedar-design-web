<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'picture-1', name: 'cat.jpg', url: '/upload-cat.jpg', status: 'success', percent: 100 },
  { uid: 'picture-2', name: 'video-cover.jpg', url: '/upload-cover.jpg', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model:file-list="files" list-type="picture" multiple image-fit="contain" /></template>
