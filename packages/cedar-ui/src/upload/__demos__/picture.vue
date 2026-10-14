<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'picture-1', name: 'example.svg', url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%236750a4%22/%3E%3C/svg%3E', status: 'success', percent: 100 },
  { uid: 'picture-2', name: 'video-cover.jpg', url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%236750a4%22/%3E%3C/svg%3E', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" list-type="picture" multiple image-fit="contain" /></template>
