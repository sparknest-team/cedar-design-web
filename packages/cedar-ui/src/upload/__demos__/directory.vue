<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'folder-1', name: 'assets/logo.svg', url: '/assets/logo.svg', status: 'success', percent: 100 },
  { uid: 'folder-2', name: 'assets/readme.md', url: '/assets/readme.md', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" directory /></template>
