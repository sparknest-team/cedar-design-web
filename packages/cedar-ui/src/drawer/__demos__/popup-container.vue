<template>
  <div>
    <div
      id="parentNode"
      style="
        width: 100%;
        height: 300px;
        background-color: var(--c-color-bg-white);
        position: relative;
        overflow: hidden;
        line-height: 300px;
        text-align: center;
      "
    >
      <c-button status="primary" @click="handleClick">Open Drawer</c-button>
    </div>
  </div>
  <c-drawer v-model:open="visible" popup-container="#parentNode" @confirm="handleConfirm" @cancel="handleCancel">
    <template #title>Title</template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)

const handleClick = () => {
  visible.value = true
}
const handleConfirm = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>
