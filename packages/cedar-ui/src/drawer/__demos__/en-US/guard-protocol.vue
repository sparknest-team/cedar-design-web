<script setup lang="ts">
import { ref } from "vue";
import type { DrawerBeforeClose } from "@cedar-design/ui";
const open = ref(false);
const mode = ref("promise");
const allowed = ref(true);
const status = ref("");
const check: DrawerBeforeClose = (payload, done, { signal }) => {
  status.value = `Waiting: ${payload.action}`;
  if (mode.value === "done") {
    setTimeout(() => {
      status.value = allowed.value ? "Allowed" : "Rejected";
      done(!signal.aborted && allowed.value);
    }, 500);
    return;
  }
  return new Promise<boolean>((resolve) =>
    setTimeout(() => {
      status.value = allowed.value ? "Allowed" : "Rejected";
      resolve(!signal.aborted && allowed.value);
    }, 500),
  );
};
</script>
<template>
  <c-space direction="column" align="stretch">
    <c-form-item layout="vertical" label="Allow closing"><c-switch v-model="allowed" aria-label="Allow closing" /></c-form-item>
    <c-form-item layout="vertical" size="sm" label="mode">
      <c-radio-group
        aria-label="mode"
        v-model="mode"
        :options="[
          { value: 'promise', label: 'Promise' },
          { value: 'done', label: 'done callback' },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-button @click="open = true">Open</c-button>
    <c-drawer
      v-model:open="open"
      :before-close="check"
      @guard-error="status = 'Error'"
    >
      <p>The guard waits briefly before closing. Turn off the switch to reject once, then enable it here and retry.</p>
      <c-form-item layout="vertical" label="Allow closing"><c-switch v-model="allowed" aria-label="Allow closing inside drawer" /></c-form-item>
      <c-button @click="allowed = true; open = false">Allow and close</c-button>
      <p role="status">{{ status }}</p>
    </c-drawer>
    <p role="status">{{ status }}</p>
  </c-space>
</template>
