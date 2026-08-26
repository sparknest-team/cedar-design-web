<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  { uid: 'basic-1', name: 'product-specification.pdf', url: '/product-specification.pdf', status: 'success', percent: 100 },
  { uid: 'basic-2', name: 'release-notes.txt', url: '/release-notes.txt', status: 'success', percent: 100 },
])
</script>

<template>
  <c-upload v-model="files" multiple :max-files="5" />
</template>
