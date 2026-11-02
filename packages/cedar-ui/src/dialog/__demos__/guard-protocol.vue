<script setup lang="ts">
import { ref } from "vue";
import type { DialogBeforeClose } from "@cedar-design/ui";
const open = ref(false);
const mode = ref("promise");
const allowed = ref(false);
const status = ref("");
const check: DialogBeforeClose = (payload, done, { signal }) => {
  status.value = `等待： ${payload.action}`;
  if (mode.value === "done") {
    setTimeout(() => {
      status.value = allowed.value ? "允许" : "阻止";
      done(!signal.aborted && allowed.value);
    }, 500);
    return;
  }
  return new Promise<boolean>((resolve) =>
    setTimeout(() => {
      status.value = allowed.value ? "允许" : "阻止";
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
          { value: 'done', label: 'done 回调' },
        ]"
        variant="button"
        size="sm"
      />
    </c-form-item>
    <c-button @click="open = true">打开</c-button>
    <c-dialog
      v-model:open="open"
      :before-close="check"
      @guard-error="status = 'Error'"
    >
      <template #default
        ><c-button v-if="false" @click="open = true">Confirm action</c-button
        ><span v-else>通过 beforeClose 关闭</span></template
      >
    </c-dialog>
    <p role="status">{{ status }}</p>
  </c-space>
</template>
