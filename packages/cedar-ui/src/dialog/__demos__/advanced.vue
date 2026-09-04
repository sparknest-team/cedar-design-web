<template>
  <c-space>
    <c-button @click="footerHiddenOpen = true">Hide Footer</c-button>
    <c-button @click="titleHiddenOpen = true">Hide Title</c-button>
    <c-button @click="customBodyOpen = true">Custom Body</c-button>
    <c-button @click="unmountOpen = true">Unmount on Close</c-button>
  </c-space>

  <c-dialog
    v-model:open="footerHiddenOpen"
    :footer="false"
    type="info"
    title="Read Only"
    message="This dialog intentionally has no footer actions."
  />
  <c-dialog
    v-model:open="titleHiddenOpen"
    hide-title
    aria-label="Dialog without a visible title"
    type="warning"
    message="Use aria-label when the visible title is hidden."
  />
  <c-dialog
    v-model:open="customBodyOpen"
    type="info"
    title="Custom Body"
    message="The body supports custom alignment, classes, and inline styles."
    message-align="center"
    body-class="dialog-demo__body--custom"
    :body-style="{
      padding: '16px 20px',
      background: 'rgba(22, 93, 255, 0.08)',
      borderRadius: '8px',
    }"
  />
  <c-dialog
    v-model:open="unmountOpen"
    unmount-on-close
    title="Unmount on Close"
  >
    This content is removed from the DOM after the close transition.
  </c-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const footerHiddenOpen = ref(false);
const titleHiddenOpen = ref(false);
const customBodyOpen = ref(false);
const unmountOpen = ref(false);
</script>

<style scoped>
:deep(.dialog-demo__body--custom) {
  font-weight: 500;
}
</style>
