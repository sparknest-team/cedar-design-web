<script setup lang="ts">
const inlineCopy = {
  clickSaveToStart: "Click Save to start",
  saved: "Saved",
  simulatedFailure: "Simulated failure",
  save: "Save",
  failureRecovery: "Failure recovery",
  asyncClickHandlersOwnTheir: "Async click handlers own their loading state."
};

import { computed, ref } from "vue";
const saving = ref(false);
const failing = ref(false);
const messageKey = ref<keyof typeof inlineCopy>("clickSaveToStart");
const message = computed(() => inlineCopy[messageKey.value]);
const delay = () => new Promise((resolve) => setTimeout(resolve, 800));
async function save() {
  if (saving.value) return;
  saving.value = true;
  try {
    await delay();
    messageKey.value = "saved";
  } finally {
    saving.value = false;
  }
}
async function recover() {
  if (failing.value) return;
  failing.value = true;
  try {
    await delay();
    throw new Error(inlineCopy.simulatedFailure);
  } catch {
    messageKey.value = "simulatedFailure";
  } finally {
    failing.value = false;
  }
}
</script>
<template>
  <c-space direction="column" :size="12">
    <p>Async click handlers own their loading state.</p>
    <c-space wrap :size="12">
      <c-button :loading="saving" @click="save">Save</c-button>
      <c-button :loading="failing" @click="recover">Failure recovery</c-button>
    </c-space>
    <p aria-live="polite">{{ message }}</p>
  </c-space>
</template>
