<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'validate-1', name: 'validated-image.jpg', url: '/upload-cat.jpg', status: 'success', percent: 100 },
])
const beforeRead = (file: File) => file.type.startsWith('image/')
</script>

<template><c-upload v-model="files" multiple :before-read="beforeRead" /></template>
