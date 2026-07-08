<template>
  <c-space>
    <c-button @click="handleClickInfo">Info</c-button>
    <c-button status="success" @click="handleClickSuccess">Success</c-button>
    <c-button status="warning" @click="handleClickWarning">Warning</c-button>
    <c-button status="danger" @click="handleClickError">Error</c-button>
  </c-space>
</template>

<script lang="ts">
export default {
  setup() {
    const handleClickInfo = () => {
      Modal.info({
        title: 'Info Notification',
        content: 'This is an info description which directly indicates a neutral informative change or action.',
      })
    }
    const handleClickSuccess = () => {
      Modal.success({
        title: 'Success Notification',
        content: 'This is a success notification',
      })
    }
    const handleClickWarning = () => {
      Modal.warning({
        title: 'Warning Notification',
        content: 'This is a warning description which directly indicates a warning that might need attention.',
      })
    }
    const handleClickError = () => {
      Modal.error({
        title: 'Error Notification',
        content: 'This is an error description which directly indicates a dangerous or potentially negative action.',
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
