<template>
  <c-space>
    <c-button @click="asyncOpen = true">Async Close</c-button>
    <c-button @click="loadingOpen = true">Button Loading</c-button>
  </c-space>

  <c-dialog
    v-model:open="asyncOpen"
    title="Async Close"
    message="Every action waits for the asynchronous task to finish."
    :before-close="beforeClose"
  />
  <c-dialog
    v-model:open="loadingOpen"
    title="Button Loading"
    message="The confirm button displays loading while the task is running."
    :before-close="buttonLoadingClose"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { DialogAction } from "../types";

const asyncOpen = ref(false);
const loadingOpen = ref(false);

function beforeClose({ action: _action }: { action: DialogAction }, done: () => void) {
  window.setTimeout(done, 1000);
}

function buttonLoadingClose(
  { action }: { action: DialogAction },
  done: () => void,

) {
  if (action !== "confirm") {
    done();
    return;
  }

  window.setTimeout(() => {
    done();
  }, 1000);
}
</script>
