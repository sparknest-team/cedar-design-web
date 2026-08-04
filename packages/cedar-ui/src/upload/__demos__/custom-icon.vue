<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedar/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'custom-item-1', name: 'design-assets.zip', url: '/design-assets.zip', status: 'success', percent: 100 },
])
</script>

<template>
  <c-upload v-model:file-list="files">
    <template #item="{ file, remove }"><c-tag closable @close="remove">{{ file.name }}</c-tag></template>
  </c-upload>
</template>
