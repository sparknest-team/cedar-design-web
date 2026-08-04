<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'drag-1', name: 'uploaded-archive.zip', url: '/uploaded-archive.zip', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model:file-list="files" multiple draggable /></template>
