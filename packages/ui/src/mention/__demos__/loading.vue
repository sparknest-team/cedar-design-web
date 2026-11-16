<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("mentionLoadingInline");

import { computed, onBeforeUnmount, ref } from "vue";
import type { OptionsLoader } from "../../_hooks/use-option-request";
const loading = ref(true);
const requests = new Set<(failed?: boolean) => void>();
const pending = ref(0);
const statusKey = ref<keyof typeof inlineCopy.value>("waitingForData");
const status = computed(() => inlineCopy.value[statusKey.value]);
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
    <h4>{{ inlineCopy.manualLoading }}</h4>
    <c-switch v-model="loading" :aria-label="inlineCopy.manualLoading2" />
    <c-mention
      edit-mode="direct"
      :loading="loading"
      :options="['Alice', 'Bob']"
      :placeholder="inlineCopy.singleLine"
    />
    <c-mention
      edit-mode="direct"
      type="textarea"
      :loading="loading"
      :options="['Alice', 'Bob']"
      :placeholder="inlineCopy.multipleLines"
    />
    <p>{{ inlineCopy.loadingDoesNotDisableEditing }}</p>
    <h4>{{ inlineCopy.remoteCandidates }}</h4>
    <c-mention
      edit-mode="direct"
      :options="load"
      :placeholder="inlineCopy.typeA"
      @load-error="() => {}"
    />
    <c-space>
      <c-button :disabled="!pending" @click="settle()">{{
        inlineCopy.resolve
      }}</c-button>
      <c-button :disabled="!pending" @click="settle(true)">{{
        inlineCopy.reject
      }}</c-button>
    </c-space>
    <p role="status">
      {{ pending ? inlineCopy.pendingEditingRemainsAvailable : status }}
    </p>
  </c-space>
</template>
