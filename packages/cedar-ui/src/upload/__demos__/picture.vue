<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'picture-1', name: 'cat.jpg', url: '/upload-cat.jpg', status: 'success', percent: 100 },
  { uid: 'picture-2', name: 'video-cover.jpg', url: '/upload-cover.jpg', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" list-type="picture" multiple image-fit="contain" /></template>
