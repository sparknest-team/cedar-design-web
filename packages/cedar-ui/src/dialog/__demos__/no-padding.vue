<template>
  <c-space>
    <c-button @click="handleClick">Open Dialog</c-button>
  </c-space>

  <c-dialog v-model:show="show" :body-padding="false" title="no-padding" @cancel="handleCancel" @confirm="handleOk">
    <div class="p-24">
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
