<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedar-design/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'trigger-1', name: 'uploaded-document.pdf', url: '/uploaded-document.pdf', status: 'success', percent: 100 },
])
</script>

<template>
  <c-upload v-model="files">
    <template #trigger="{ chooseFile }"><c-button @click.stop="chooseFile">Choose documents</c-button></template>
  </c-upload>
</template>
