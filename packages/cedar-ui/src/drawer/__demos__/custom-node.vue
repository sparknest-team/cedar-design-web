<template>
  <c-checkbox-group v-model="custom" :options="['hide header', 'hide footer', 'hide cancel']" />
  <div :style="{ marginTop: '20px' }">
    <c-button type="primary" @click="handleClick">Open Drawer</c-button>
  </div>
  <c-drawer
    :width="340"
    :header="!custom.includes('hide header')"
    :footer="!custom.includes('hide footer')"
    :hide-cancel="custom.includes('hide cancel')"
    :open="visible"
    @ok="handleOk"
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
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
</script>
