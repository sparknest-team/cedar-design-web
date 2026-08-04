<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'remove-1', name: 'approved-contract.pdf', url: '/approved-contract.pdf', status: 'success', percent: 100 },
])
const beforeRemove = (file: UploadFileItem) => window.confirm(`Remove ${file.name}?`)
</script>

<template><c-upload v-model:file-list="files" :before-remove="beforeRemove" /></template>
