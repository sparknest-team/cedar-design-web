<script setup lang="ts">
const inlineCopy = {
  waitingForData: "Waiting for data",
  failedTypeToRetry: "Failed; type to retry",
  dataReceived: "Data received",
  manualLoading: "Manual loading",
  manualLoading2: "Manual loading",
  singleLine: "Single line",
  multipleLines: "Multiple lines",
  remoteCandidates: "Remote candidates",
  typeA: "Type @a",
  resolve: "Resolve",
  reject: "Reject",
  pendingEditingRemainsAvailable: "Pending; editing remains available",
  loadingDoesNotDisableEditing: "Loading does not disable editing or await notification handlers."
};

import { computed, onBeforeUnmount, ref } from "vue";
import type { OptionsLoader } from "../../_hooks/use-option-request";
const loading = ref(true);
const requests = new Set<(failed?: boolean) => void>();
const pending = ref(0);
const statusKey = ref<keyof typeof inlineCopy>("waitingForData");
const status = computed(() => inlineCopy[statusKey.value]);
const load: OptionsLoader<string> = (query, { signal }) =>
  new Promise((resolve, reject) => {
    const finish = (failed = false) => {
      requests.delete(finish);
      pending.value = requests.size;
      signal.removeEventListener("abort", cancel);
      if (failed) reject(new Error("Candidate request failed"));
      else
        resolve(
          ["Alice", "Bob"].filter((name) =>
            name.toLowerCase().includes(query.toLowerCase()),
          ),
        );
    };
    const cancel = () => finish();
    requests.add(finish);
    pending.value = requests.size;
    signal.addEventListener("abort", cancel, { once: true });
  });
function settle(failed = false) {
  statusKey.value = failed ? "failedTypeToRetry" : "dataReceived";
  [...requests].forEach((finish) => finish(failed));
}
onBeforeUnmount(() => settle());
</script>
<template>
  <c-space direction="column" style="width: 100%" :size="16">
    <h4>Manual loading</h4>
    <c-switch v-model="loading" aria-label="Manual loading" />
    <c-mention
      edit-mode="direct"
      :loading="loading"
      :options="['Alice', 'Bob']"
      placeholder="Single line"
    />
    <c-mention
      edit-mode="direct"
      type="textarea"
      :loading="loading"
      :options="['Alice', 'Bob']"
      placeholder="Multiple lines"
    />
    <p>Loading does not disable editing or await notification handlers.</p>
    <h4>Remote candidates</h4>
    <c-mention
      edit-mode="direct"
      :options="load"
      placeholder="Type @a"
      @load-error="() => {}"
    />
    <c-space>
      <c-button :disabled="!pending" @click="settle()">Resolve</c-button>
      <c-button :disabled="!pending" @click="settle(true)">Reject</c-button>
    </c-space>
    <p role="status">
      {{ pending ? inlineCopy.pendingEditingRemainsAvailable : status }}
    </p>
  </c-space>
</template>
