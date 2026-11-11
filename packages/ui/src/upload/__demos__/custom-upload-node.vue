<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedar-design/ui-vue'

const files = ref<UploadFileItem[]>([
  { uid: 'trigger-1', name: 'uploaded-document.pdf', url: '/uploaded-document.pdf', status: 'success', percent: 100 },
])
</script>

<template>
  <c-upload v-model="files">
    <template #trigger="{ chooseFile, disabled }"><c-button :disabled="disabled" @click="chooseFile">Choose documents</c-button></template>
  </c-upload>
</template>
