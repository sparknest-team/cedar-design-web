<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedar-design/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'validate-1', name: 'validated-image.jpg', url: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22120%22 height=%22120%22 fill=%22%236750a4%22/%3E%3C/svg%3E', status: 'success', percent: 100 },
])
const beforeRead = (file: File) => file.type.startsWith('image/')
</script>

<template><c-upload v-model="files" multiple :before-read="beforeRead" /></template>
