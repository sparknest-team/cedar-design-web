<template>
  <c-button @click="handleClick">Duration 1000ms</c-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Message } from "@cedarjs/ui";

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info({
        content: "This is an info message!",
        duration: 1000,
      });
    };
    return {
      handleClick,
    };
  },
});
</script>
