<template>
  <c-radio-group v-model="position">
    <c-radio value="top">Top</c-radio>
    <c-radio value="right">Right</c-radio>
    <c-radio value="bottom">Bottom</c-radio>
    <c-radio value="left">Left</c-radio>
  </c-radio-group>
  <div :style="{ marginTop: '20px' }">
    <c-button type="primary" @click="handleClick">Open Drawer</c-button>
  </div>
  <c-drawer
    :width="340"
    :height="340"
    :visible="visible"
    :placement="position"
    @ok="handleOk"
    @cancel="handleCancel"
    unmountOnClose
  >
    <template #title> Title </template>
    <div>
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
  </c-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const position = ref('right')

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
