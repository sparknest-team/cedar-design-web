<template>
  <c-space direction="column">
    <c-switch v-model="triggerProps.open">
      <template #checked> ON</template>
      <template #unchecked>OFF</template>
    </c-switch>
    <c-color-picker defaultValue="#00BEBE" :hide-trigger="false" :trigger-props="triggerProps" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const triggerProps = ref({
  open: false,
  unmountOnClose: true,
  renderToBody: false,
  placement: 'rt',
})
</script>
