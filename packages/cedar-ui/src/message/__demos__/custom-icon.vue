<template>
  <c-button @click="handleClick">Info Message</c-button>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { Message } from '@cedarjs/ui'
import { IconFaceSmileFill } from '@cedarjs/icons-vue'

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
