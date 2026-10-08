<template>
  <c-button @click="handleClick">Update Info Message</c-button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Message } from "@cedarjs/ui";

export default defineComponent({
  setup() {
    const index = ref(0);
    const handleClick = () => {
      Message.info({
        id: "myInfo",
        content: `This is an info message ${index.value++}`,
        duration: 2000,
        resetOnUpdate: true,
      });
    };
    return {
      index,
      handleClick,
    };
  },
});
</script>
