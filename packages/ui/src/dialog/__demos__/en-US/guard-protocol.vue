<script setup lang="ts">
import { ref } from "vue";
import type { DialogBeforeClose } from "@cedar-design/ui-vue";
const open = ref(false);
const mode = ref("promise");
const allowed = ref(false);
const status = ref("");
const check: DialogBeforeClose = (payload, done, { signal }) => {
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
    <c-switch v-model="allowed" />
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
    <c-dialog
      v-model:open="open"
      :before-close="check"
      @guard-error="status = 'Error'"
    >
      <template #default
        ><c-button v-if="false" @click="open = true">Confirm action</c-button
        ><span v-else>Close with beforeClose</span></template
      >
    </c-dialog>
    <p role="status">{{ status }}</p>
  </c-space>
</template>
