<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'report', name: 'quarterly-report.pdf', url: '/files/quarterly-report.pdf', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" /></template>
