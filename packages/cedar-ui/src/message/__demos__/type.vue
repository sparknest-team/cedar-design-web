<template>
  <div>
    <c-space>
      <c-button @click="() => Message.info('This is an info message!')">Info Message</c-button>
      <c-button @click="() => Message.success('This is a success message!')" status="success">Success Message </c-button>
      <c-button @click="() => Message.warning('This is a warning message!')" status="warning">Warning Message </c-button>
      <c-button @click="() => Message.error('This is an error message!')" status="danger">Error Message</c-button>
    </c-space>
  </div>
  <div style="margin-top: 20px">
    <c-space>
      <c-button @click="() => Message.normal('This is a normal message!')">Normal Message</c-button>
      <c-button
        @click="
          () =>
            Message.normal({
              content: 'This is a normal message!',
              icon: renderIcon,
            })
        "
        >Normal Message With Icon
      </c-button>
      <c-button @click="() => Message.loading('This is a loading message!')" status="primary">Loading Message </c-button>
    </c-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import { Message, IconExclamationCircleFill } from '@cedar/ui'

export default defineComponent({
  setup() {
    const renderIcon = () => h(IconExclamationCircleFill)
    return {
      renderIcon,
      Message,
    }
  },
})
</script>
