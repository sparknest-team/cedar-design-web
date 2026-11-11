<template>
  <c-space>
    <c-button @click="handleClickInfo">Info</c-button>
    <c-button status="success" @click="handleClickSuccess">Success</c-button>
    <c-button status="warning" @click="handleClickWarning">Warning</c-button>
    <c-button status="danger" @click="handleClickError">Error</c-button>
  </c-space>
</template>

<script lang="ts">
import { Dialog } from '@cedar-design/ui-vue'

export default {
  setup() {
    const handleClickInfo = () => {
      Dialog.info({
        title: 'Info Notification',
        message: 'This is an info description which directly indicates a neutral informative change or action.',
      })
    }
    const handleClickSuccess = () => {
      Dialog.success({
        title: 'Success Notification',
        message: 'This is a success notification',
      })
    }
    const handleClickWarning = () => {
      Dialog.warning({
        title: 'Warning Notification',
        message: 'This is a warning description which directly indicates a warning that might need attention.',
      })
    }
    const handleClickError = () => {
      Dialog.error({
        title: 'Error Notification',
        message: 'This is an error description which directly indicates a dangerous or potentially negative action.',
      })
    }

    return {
      handleClickInfo,
      handleClickSuccess,
      handleClickWarning,
      handleClickError,
    }
  },
}
</script>
