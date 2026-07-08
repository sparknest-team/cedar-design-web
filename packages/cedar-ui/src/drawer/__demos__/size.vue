<template>
  <c-space>
    <c-button type="primary" @click="handleClickSmall">sm Drawer</c-button>
    <c-button type="primary" @click="handleClickMedium">md Drawer</c-button>
    <c-button type="primary" @click="handleClickLarge">lg Drawer</c-button>
  </c-space>
  <c-drawer size="sm" :visible="visibleSmall" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
  <c-drawer size="md" :visible="visibleMedium" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
  <c-drawer size="lg" :visible="visibleLarge" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
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
</script>
