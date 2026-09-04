<template>
  <c-space>
    <c-button @click="() => Message.info({ content: 'This is an info message!' })">Top Message</c-button>
    <c-button @click="() => Message.info({ content: 'This is an info message!', position: 'bottom' })"
      >Bottom Message</c-button
    >
  </c-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      Message,
    }
  },
})
</script>
