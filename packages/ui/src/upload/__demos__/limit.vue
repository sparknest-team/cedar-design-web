<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedar-design/ui-vue'

const files = ref<UploadFileItem[]>([
  { uid: 'limit-1', name: 'existing-file.pdf', url: '/existing-file.pdf', status: 'success', percent: 100 },
])
</script>

<template><c-upload v-model="files" multiple :max-files="3" :max-file-size="1048576" /></template>
