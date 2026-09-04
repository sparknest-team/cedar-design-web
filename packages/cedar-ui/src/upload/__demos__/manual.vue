<script setup lang="ts">
import { ref } from 'vue'
import type { UploadFileItem, UploadInstance } from '@cedarjs/ui'

const uploadRef = ref<UploadInstance>()
const files = ref<UploadFileItem[]>([])
</script>

<template>
  <c-space>
    <c-upload ref="uploadRef" v-model="files" multiple :auto-upload="false" />
    <c-button status="primary" @click="uploadRef?.submit()">Upload</c-button>
  </c-space>
</template>
