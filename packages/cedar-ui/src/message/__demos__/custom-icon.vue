<template>
  <c-button @click="handleClick">Info Message</c-button>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { IconFaceSmileFill } from '@cedarjs/icons-vue'
import { Message } from '@cedarjs/ui'

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info({
        content: 'This is an info message!',
        icon: () => h(IconFaceSmileFill),
      })
    }
    return {
      handleClick,
    }
  },
})
</script>
