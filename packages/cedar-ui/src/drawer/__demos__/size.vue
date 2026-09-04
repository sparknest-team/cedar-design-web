<template>
  <c-space>
    <c-button status="primary" @click="handleClickSmall">sm Drawer</c-button>
    <c-button status="primary" @click="handleClickMedium">md Drawer</c-button>
    <c-button status="primary" @click="handleClickLarge">lg Drawer</c-button>
  </c-space>
  <c-drawer size="sm" :open="visibleSmall" @confirm="handleConfirm" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
  <c-drawer size="md" :open="visibleMedium" @confirm="handleConfirm" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
  <c-drawer size="lg" :open="visibleLarge" @confirm="handleConfirm" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
const handleConfirm = () => {
  visibleSmall.value = false
  visibleMedium.value = false
  visibleLarge.value = false
}
const handleCancel = () => {
  visibleSmall.value = false
  visibleMedium.value = false
  visibleLarge.value = false
}
</script>
