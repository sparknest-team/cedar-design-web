<template>
  <c-space>
    <c-button @click="handleClickConfirm">Confirm</c-button>
    <c-button status="danger" @click="handleClickDanger">Delete</c-button>
    <c-button @click="handleClickConfirmNullContent">Confirm Null Content</c-button>
  </c-space>
</template>

<script lang="ts">
export default {
  setup() {
    const handleClickConfirm = () => {
      Dialog.warning({
        title: 'Confirm Notification',
        message: 'This is an confirm description.',
        confirmButtonText: 'Confirm',
        cancelButton: true,
      })
    }
    const handleClickDanger = () => {
      Dialog.warning({
        title: 'Danger Notification',
        message: 'This is an danger description.',
        confirmButtonText: 'Delete',
        cancelButton: true,
        confirmButtonProps: {
          type: 'primary',
          status: 'danger',
        },
      })
    }

    const handleClickConfirmNullContent = () => {
      Dialog.warning({
        title: 'Confirm Notification',
      })
    }

    return {
      handleClickConfirm,
      handleClickDanger,
      handleClickConfirmNullContent,
    }
  },
}
</script>
