<script setup lang="ts">
const inlineCopy = {
  disableDrag: "Disable drag",
  enableDrag: "Enable drag",
  exitFullscreen: "Exit fullscreen",
  fullscreen: "Fullscreen",
  dragEnabled: "Drag enabled",
  dragStopped: "Drag stopped"
};

import { ref } from "vue";
const open = ref(false);
const draggable = ref(true);
const fullscreen = ref(false);
function keyboard(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "d") {
    event.preventDefault();
    draggable.value = !draggable.value;
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    fullscreen.value = !fullscreen.value;
  }
}
</script>
<template>
  <c-button @click="open = true">Open drag example</c-button>
  <c-dialog
    v-model:open="open"
    :draggable="draggable"
    :fullscreen="fullscreen"
    title="Drag title"
    @keydown="keyboard"
    @confirm="open = false"
    @cancel="open = false"
  >
    <p>Drag the title, press D to disable dragging or F for fullscreen, and reopen after closing.</p>
    <c-space wrap>
      <c-button @click="draggable = !draggable">{{
        draggable ? inlineCopy.disableDrag : inlineCopy.enableDrag
      }}</c-button>
      <c-button @click="fullscreen = !fullscreen">{{
        fullscreen ? inlineCopy.exitFullscreen : inlineCopy.fullscreen
      }}</c-button>
    </c-space>
    <p role="status">
      {{ draggable ? inlineCopy.dragEnabled : inlineCopy.dragStopped }}
    </p>
  </c-dialog>
</template>
