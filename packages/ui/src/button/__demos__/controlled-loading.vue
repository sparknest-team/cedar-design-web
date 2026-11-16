<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("buttonControlledLoadingInline");

import { computed, ref } from "vue";
const saving = ref(false);
const failing = ref(false);
const messageKey = ref<keyof typeof inlineCopy.value>("clickSaveToStart");
const message = computed(() => inlineCopy.value[messageKey.value]);
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
    throw new Error(inlineCopy.value.simulatedFailure);
  } catch {
    messageKey.value = "simulatedFailure";
  } finally {
    failing.value = false;
  }
}
</script>
<template>
  <c-space direction="column" :size="12">
    <p>{{ inlineCopy.asyncClickHandlersOwnTheir }}</p>
    <c-space wrap :size="12">
      <c-button :loading="saving" @click="save">{{ inlineCopy.save }}</c-button>
      <c-button :loading="failing" @click="recover">{{
        inlineCopy.failureRecovery
      }}</c-button>
    </c-space>
    <p aria-live="polite">{{ message }}</p>
  </c-space>
</template>
