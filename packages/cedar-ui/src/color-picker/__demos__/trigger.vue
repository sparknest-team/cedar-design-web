<template>
  <c-space direction="column">
    <c-switch v-model="triggerProps.popupVisible">
      <template #checked> ON</template>
      <template #unchecked>OFF</template>
    </c-switch>
    <c-color-picker defaultValue="#00BEBE" :trigger-props="triggerProps" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const triggerProps = ref({
  popupVisible: false,
  unmountOnClose: true,
  renderToBody: false,
  position: 'rt',
})
</script>
