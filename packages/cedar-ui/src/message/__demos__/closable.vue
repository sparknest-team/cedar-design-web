<template>
  <c-button @click="handleClick">Closeable Message</c-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info({
        content: 'This is an info message!',
        closable: true,
      })
    }
    return {
      handleClick,
    }
  },
})
</script>
