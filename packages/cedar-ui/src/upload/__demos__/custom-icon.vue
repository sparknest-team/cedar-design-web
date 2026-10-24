<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadPreviewEvent } from '@cedar-design/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'custom-item-1', name: 'design-assets.zip', url: 'data:text/plain,Example%20download', status: 'success', percent: 100 },
])
</script>

<template>
  <c-upload v-model="files">
    <template #item="{ file, remove }"><c-tag closable @close="remove">{{ file.name }}</c-tag></template>
  </c-upload>
</template>
