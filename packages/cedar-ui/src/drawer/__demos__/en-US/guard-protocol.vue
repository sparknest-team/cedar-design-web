<script setup lang="ts">
import { ref } from "vue";
import type { DrawerBeforeClose } from "@cedar-design/ui";
const open = ref(false);
const mode = ref("promise");
const allowed = ref(true);
const status = ref("");
function waitForDecision(signal: AbortSignal) {
  return new Promise<boolean>((resolve) => {
    const abort = () => { clearTimeout(timer); signal.removeEventListener('abort', abort); resolve(false) }
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', abort)
      if (signal.aborted) { resolve(false); return }
      status.value = allowed.value ? 'Allowed' : 'Rejected'
      resolve(allowed.value)
    }, 500)
    signal.addEventListener('abort', abort, { once: true })
    if (signal.aborted) abort()
  })
}
const check: DrawerBeforeClose = (payload, done, { signal }) => {
  status.value = `Waiting: ${payload.action}`
  const decision = waitForDecision(signal)
  if (mode.value === 'done') { void decision.then(value => done(value)); return }
  return decision
}
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
      <c-button @click="open = false; status = 'Closed directly'">Close directly</c-button>
      <p role="status">{{ status }}</p>
    </c-drawer>
    <p role="status">{{ status }}</p>
  </c-space>
</template>
