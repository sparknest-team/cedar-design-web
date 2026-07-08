<template>
  <c-space>
    <c-button @click="handleClick">Open Modal</c-button>
  </c-space>

  <c-modal v-model:visible="visible" :body-padding="false" title="no-padding" @cancel="handleCancel" @ok="handleOk">
    <div class="p-24">
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible = ref(false)

    const handleClick = () => {
      visible.value = true
    }
    const handleOk = () => {
      visible.value = false
    }
    const handleCancel = () => {
      visible.value = false
    }

    return {
      visible,
      handleClick,
      handleOk,
      handleCancel,
    }
  },
})
</script>
