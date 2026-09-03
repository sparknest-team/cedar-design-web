<template>
  <Space>
    <c-button @click="handleClick">Open Dialog</c-button>
  </Space>

  <c-dialog v-model:open="show" @confirm="handleConfirm" @cancel="handleCancel">
    <template #title>title2</template>
    <c-date-picker></c-date-picker>
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
    const handleConfirm = () => {
      show.value = false
    }
    const handleCancel = () => {
      show.value = false
    }

    return {
      show,
      handleClick,
      handleConfirm,
      handleCancel,
    }
  },
})
</script>
