<template>
  <c-button @click="handleClick">Multiple Messages</c-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Message } from "@cedar-design/ui";

export default defineComponent({
  setup() {
    const handleClick = () => {
      const message1 = Message.info("Message 1");
      Message.success("Message 2");
      Message.warning("Message 3");
      setTimeout(() => {
        message1.close();
      }, 1000);
    };
    return {
      handleClick,
    };
  },
});
</script>
