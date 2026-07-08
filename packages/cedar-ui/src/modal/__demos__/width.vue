<template>
  <c-space>
    <c-button @click="handleClickSmall">sm Modal</c-button>
    <c-button @click="handleClickMedium">md Modal</c-button>
    <c-button @click="handleClickLarge">lg Modal</c-button>
  </c-space>
  <c-modal size="sm" v-model:visible="visibleSmall" @ok="handleOk" @cancel="handleCancel">
    <template #title>Small Modal</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-modal>
  <c-modal size="md" v-model:visible="visibleMedium" @ok="handleOk" @cancel="handleCancel">
    <template #title>Medium Modal</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-modal>
  <c-modal size="lg" v-model:visible="visibleLarge" @ok="handleOk" @cancel="handleCancel">
    <template #title>Large Modal</template>
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
      visibleSmall.value = false
      visibleSmall.value = false
    }
    const handleCancel = () => {
      visibleSmall.value = false
      visibleSmall.value = false
      visibleSmall.value = false
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
