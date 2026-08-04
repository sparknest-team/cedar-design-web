<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'report', name: 'quarterly-report.pdf', url: '/files/quarterly-report.pdf', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model:file-list="files" /></template>
