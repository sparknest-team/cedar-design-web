<template>
  <c-space>
    <c-button @click="handleClickSmall">Small Dialog</c-button>
    <c-button @click="handleClickMedium">Medium Dialog</c-button>
    <c-button @click="handleClickLarge">Large Dialog</c-button>
  </c-space>
  <c-dialog :width="400" v-model:show="visibleSmall" @confirm="handleOk" @cancel="handleCancel">
    <template #title>Small Dialog</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-dialog>
  <c-dialog v-model:show="visibleMedium" @confirm="handleOk" @cancel="handleCancel">
    <template #title>Medium Dialog</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-dialog>
  <c-dialog :width="720" v-model:show="visibleLarge" @confirm="handleOk" @cancel="handleCancel">
    <template #title>Large Dialog</template>
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
    const visibleSmall = ref(false)
    const visibleMedium = ref(false)
    const visibleLarge = ref(false)

    const handleClickSmall = () => {
      visibleSmall.value = true
    }
    const handleClickMedium = () => {
      visibleMedium.value = true
    }
    const handleClickLarge = () => {
      visibleLarge.value = true
    }
    const handleOk = () => {
      visibleSmall.value = false
      visibleMedium.value = false
      visibleLarge.value = false
    }
    const handleCancel = () => {
      visibleSmall.value = false
      visibleMedium.value = false
      visibleLarge.value = false
    }

    return {
      visibleSmall,
      visibleMedium,
      visibleLarge,
      handleClickSmall,
      handleClickMedium,
      handleClickLarge,
      handleOk,
      handleCancel,
    }
  },
})
</script>
