<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem } from '@cedarjs/ui'

const files = ref<UploadFileItem[]>([
  {
    uid: 'cover-1',
    name: 'Cover image',
    url: '/upload-cat.jpg',
    status: 'success',
    percent: 100,
  },
  {
    uid: 'cover-2',
    name: 'Video cover',
    url: '/upload-cover.jpg',
    status: 'success',
    percent: 100,
  },
])
</script>

<template>
  <c-upload v-model="files" list-type="picture-card" multiple image-fit="cover" />
</template>
