<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'drag-1', name: 'uploaded-archive.zip', url: 'data:text/plain,Example%20download', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" multiple draggable /></template>
