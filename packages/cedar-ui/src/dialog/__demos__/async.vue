<template>
  <c-button @click="handleClick">Open Dialog</c-button>

  <c-dialog v-model:open="visible" unmount-on-close :before-close="handleBeforeClose" @cancel="handleCancel">
    <template #title>Title</template>
    <div>You can customize dialog content. It will close after async confirm.</div>
  </c-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const handleClick = () => {
      visible.value = true
    }

    const handleBeforeClose = (action, done, refs) => {
      if (action !== 'confirm') {
        done()
        return
      }

      refs.confirmButtonLoading.value = true
      window.setTimeout(() => {
        refs.confirmButtonLoading.value = false
        done()
      }, 2000)
    }

    const handleCancel = () => {
      visible.value = false
    }

    return {
      visible,
      handleClick,
      handleBeforeClose,
      handleCancel,
    }
  },
})
</script>
