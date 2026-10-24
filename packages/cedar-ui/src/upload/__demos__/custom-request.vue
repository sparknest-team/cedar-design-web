<script setup lang="ts">
import { ref } from 'vue'
import type { UploadCustomRequest, UploadFileItem, UploadProgressEvent } from '@cedar-design/ui'

const files = ref<UploadFileItem[]>([])

const customRequest: UploadCustomRequest = (options) => {
  const controller = new AbortController()

  const reportProgress = (percent: number) => {
    options.onProgress({ percent } as UploadProgressEvent)
  }

  reportProgress(20)

  const formData = new FormData()
  if (options.file.file) {
    formData.append('file', options.file.file, options.file.name)
  }

  fetch('/api/mock/upload', {
    method: 'POST',
    body: formData,
    headers: {
      'x-upload-demo': 'cedar-custom-request',
    },
    signal: controller.signal,
  })
    .then(async (response) => {
      reportProgress(70)
      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`)
      }

      const result = await response.json()
      await new Promise((resolve) => window.setTimeout(resolve, 400))
      reportProgress(100)
      options.onSuccess(result)
    })
    .catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }
      options.onError(error)
    })

  return {
    abort() {
      controller.abort()
    }
  }
}
</script>

<template>
  <c-upload
    v-model="files"
    accept="image/*"
    list-type="picture"
    multiple
    :custom-request="customRequest"
  />
</template>
