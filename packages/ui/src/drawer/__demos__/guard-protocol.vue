<script setup lang="ts">
import { ref } from "vue";
import type { DrawerBeforeClose } from "@cedar-design/ui-vue";
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
      status.value = allowed.value ? '允许' : '阻止'
      resolve(allowed.value)
    }, 500)
    signal.addEventListener('abort', abort, { once: true })
    if (signal.aborted) abort()
  })
}
const check: DrawerBeforeClose = (payload, done, { signal }) => {
  status.value = `等待： ${payload.action}`
  const decision = waitForDecision(signal)
  if (mode.value === 'done') { void decision.then(value => done(value)); return }
  return decision
}
</script>
<template>
  <c-space direction="column" align="stretch">
    <c-form-item layout="vertical" label="允许关闭"><c-switch v-model="allowed" aria-label="允许关闭" /></c-form-item>
    <c-form-item layout="vertical" size="sm" label="mode">
      <c-radio-group
        aria-label="mode"
        v-model="mode"
        :options="[
          { value: 'promise', label: 'Promise' },
          { value: 'done', label: 'done 回调' },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-button @click="open = true">打开</c-button>
    <c-drawer
      v-model:open="open"
      :before-close="check"
      @guard-error="status = 'Error'"
    >
      <p>关闭前等待片刻。可以关闭开关体验一次拦截，再在抽屉内重新允许关闭并重试。</p>
      <c-form-item layout="vertical" label="允许关闭"><c-switch v-model="allowed" aria-label="抽屉内允许关闭" /></c-form-item>
      <c-button @click="open = false; status = '已直接关闭'">直接关闭</c-button>
      <p role="status">{{ status }}</p>
    </c-drawer>
    <p role="status">{{ status }}</p>
  </c-space>
</template>
