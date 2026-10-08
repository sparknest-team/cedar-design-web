<template>
  <c-checkbox-group v-model="custom" :options="['hide header', 'hide footer', 'hide cancel']" />
  <div :style="{ marginTop: '20px' }">
    <c-button status="primary" @click="handleClick">Open Drawer</c-button>
  </div>
  <c-drawer
    :width="340"
    :header="!custom.includes('hide header')"
    :footer="!custom.includes('hide footer')"
    :cancel-button="!custom.includes('hide cancel')"
    v-model:open="visible"
    @confirm="handleConfirm"
    @cancel="handleCancel"
    unmountOnClose
  >
    <template #header>
      <span>Header and title</span>
    </template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const custom = ref([])

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
