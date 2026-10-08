<template>
  <c-button @click="handleClick">Reset On Hover</c-button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Message } from "@cedarjs/ui";

export default defineComponent({
  setup() {
    const handleClick = () => {
      Message.info({
        content: "Hover to pause auto close",
        duration: 3000,
        pauseOnHover: true,
      });
    };
    return {
      handleClick,
    };
  },
});
</script>
