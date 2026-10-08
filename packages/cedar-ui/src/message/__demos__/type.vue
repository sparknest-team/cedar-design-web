<template>
  <div>
    <c-space>
      <c-button @click="() => Message.info('This is an info message!')"
        >Info Message</c-button
      >
      <c-button
        @click="() => Message.success('This is a success message!')"
        status="success"
        >Success Message
      </c-button>
      <c-button
        @click="() => Message.warning('This is a warning message!')"
        status="warning"
        >Warning Message
      </c-button>
      <c-button
        @click="() => Message.error('This is an error message!')"
        status="danger"
        >Error Message</c-button
      >
    </c-space>
  </div>
  <div style="margin-top: 20px">
    <c-space>
      <c-button @click="() => Message('This is a default message!')"
        >Default Message</c-button
      >
      <c-button
        @click="
          () =>
            Message({
              content: 'This is a default message!',
              icon: renderIcon,
            })
        "
        >Default Message With Icon
      </c-button>
      <c-button @click="handleLoading" status="primary"
        >Loading Message
      </c-button>
    </c-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import { IconExclamationCircleFill } from "@cedarjs/icons-vue";
import { Message } from "@cedarjs/ui";

export default defineComponent({
  setup() {
    const renderIcon = () => h(IconExclamationCircleFill);

    const handleLoading = () => {
      const message = Message.loading("This is a loading message!");
      setTimeout(() => {
        message.close();
        Message.success("Loaded");
      }, 2000);
    };

    return {
      renderIcon,
      handleLoading,
      Message,
    };
  },
});
</script>
