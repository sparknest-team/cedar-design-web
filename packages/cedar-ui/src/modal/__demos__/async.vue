<template>
  <c-button @click="handleClick">Open Modal</c-button>

  <c-modal v-model:visible="visible" :on-before-ok="handleBeforeOk" unmount-on-close @cancel="handleCancel">
    <template #title> Title </template>
    <div>
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
    const handleBeforeOk = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return true
      // prevent close
      // return false;
    }
    const handleCancel = () => {
      visible.value = false
    }

    return {
      visible,
      handleClick,
      handleBeforeOk,
      handleCancel,
    }
  },
})
</script>
