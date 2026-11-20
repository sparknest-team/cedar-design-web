<script setup lang="ts">
const inlineCopy = {
  waitingForData: "等待数据",
  failedTypeToRetry: "请求失败，可继续输入重试",
  dataReceived: "数据已返回",
  manualLoading: "业务控制",
  manualLoading2: "业务加载状态",
  singleLine: "单行输入 @",
  multipleLines: "多行输入 @",
  remoteCandidates: "数据源等待",
  typeA: "输入 @a，手动返回候选数据",
  resolve: "返回数据",
  reject: "模拟失败",
  pendingEditingRemainsAvailable: "请求中，仍可输入",
  loadingDoesNotDisableEditing: "loading 只控制显示，两种输入框均可继续编辑。普通事件返回 Promise 不会触发等待。"
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
    <h4>业务控制</h4>
    <c-switch v-model="loading" aria-label="业务加载状态" />
    <c-mention
      edit-mode="direct"
      :loading="loading"
      :options="['Alice', 'Bob']"
      placeholder="单行输入 @"
    />
    <c-mention
      edit-mode="direct"
      type="textarea"
      :loading="loading"
      :options="['Alice', 'Bob']"
      placeholder="多行输入 @"
    />
    <p>loading 只控制显示，两种输入框均可继续编辑。普通事件返回 Promise 不会触发等待。</p>
    <h4>数据源等待</h4>
    <c-mention
      edit-mode="direct"
      :options="load"
      placeholder="输入 @a，手动返回候选数据"
      @load-error="() => {}"
    />
    <c-space>
      <c-button :disabled="!pending" @click="settle()">返回数据</c-button>
      <c-button :disabled="!pending" @click="settle(true)">模拟失败</c-button>
    </c-space>
    <p role="status">
      {{ pending ? inlineCopy.pendingEditingRemainsAvailable : status }}
    </p>
  </c-space>
</template>
