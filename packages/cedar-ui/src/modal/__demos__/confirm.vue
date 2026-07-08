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
      Modal.warning({
        title: 'Confirm Notification',
        content: 'This is an confirm description.',
        okText: 'Confirm',
        hideCancel: false,
      })
    }
    const handleClickDanger = () => {
      Modal.warning({
        title: 'Danger Notification',
        content: 'This is an danger description.',
        okText: 'Delete',
        hideCancel: false,
        okButtonProps: {
          type: 'primary',
          status: 'danger',
        },
      })
    }

    const handleClickConfirmNullContent = () => {
      Modal.warning({
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
