<template>
  <c-button type="primary" @click="handleClick">Open Drawer</c-button>
  <c-drawer :visible="visible" :width="500" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>Title</template>
    <div :style="{ marginBottom: '20px' }">
      You can customize modal body text by the current situation. This modal will be closed immediately once you press
      the OK button.
    </div>
    <c-button type="primary" @click="handleNestedClick">Open Nested Drawer</c-button>
  </c-drawer>
  <c-drawer :visible="nestedVisible" @ok="handleNestedOk" @cancel="handleNestedCancel" unmountOnClose>
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
const nestedVisible = ref(false)

const handleClick = () => {
  visible.value = true
}
const handleOk = () => {
  visible.value = false
}
const handleCancel = () => {
  visible.value = false
}
const handleNestedClick = () => {
  nestedVisible.value = true
}
const handleNestedOk = () => {
  nestedVisible.value = false
}
const handleNestedCancel = () => {
  nestedVisible.value = false
}
</script>
