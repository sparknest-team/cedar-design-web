<template>
  <c-space>
    <c-button @click="handleClick1">Open Modal 100vh</c-button>
    <c-button @click="handleClick2">Open Modal 1500px</c-button>
  </c-space>

  <c-modal v-model:visible="visible1" @ok="handleOk" @cancel="handleCancel" title="height-100vh">
    <div style="height: 100vh">
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-modal>
  <c-modal v-model:visible="visible2" @ok="handleOk" @cancel="handleCancel" title="height-1500px">
    <div style="height: 1500px">
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const visible1 = ref(false)
    const visible2 = ref(false)

    const handleClick1 = () => {
      visible1.value = true
    }
    const handleClick2 = () => {
      visible2.value = true
    }
    const handleOk = () => {
      visible1.value = false
      visible2.value = false
    }
    const handleCancel = () => {
      visible1.value = false
      visible2.value = false
    }

    return {
      visible1,
      visible2,
      handleClick1,
      handleClick2,
      handleOk,
      handleCancel,
    }
  },
})
</script>
