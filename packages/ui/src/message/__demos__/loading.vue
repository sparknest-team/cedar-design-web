<template>
  <c-space>
    <c-button status="primary" @click="handleLoading">Loading</c-button>
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Message } from "@cedar-design/ui-vue";

export default defineComponent({
  setup() {
    const handleLoading = () => {
      const message = Message.loading("This is a loading message");
      setTimeout(() => {
        message.close();
        Message.success("Loaded");
      }, 2000);
    };

    return {
      handleLoading,
    };
  },
});
</script>
