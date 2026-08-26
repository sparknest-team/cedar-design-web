<template>
  <c-button @click="handleClick">Open Dialog</c-button>
  <c-dialog
    v-model:open="show"
    @confirm="handleOk"
    @cancel="handleCancel"
    confirmButtonText="Confirm"
    cancelButtonText="Exit"
    unmountOnClose
  >
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const show = ref(false)

    const handleClick = () => {
      show.value = true
    }
    const handleOk = () => {
      show.value = false
    }
    const handleCancel = () => {
      show.value = false
    }

    return {
      show,
      handleClick,
      handleOk,
      handleCancel,
    }
  },
})
</script>
