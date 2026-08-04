<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadInstance } from '@cedar/ui'

const uploadRef = ref<UploadInstance>()
const files = ref<UploadFileItem[]>([])
</script>

<template>
  <c-space>
    <c-upload ref="uploadRef" v-model:file-list="files" multiple :auto-upload="false" />
    <c-button type="primary" @click="uploadRef?.submit()">Upload</c-button>
  </c-space>
</template>
