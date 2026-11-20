<script setup lang="ts">
const inlineCopy = {
  expandRemoteGroupThenSettle: "Expand Remote group, then settle below",
  childrenReceived: "Children received",
  retryByExpandingAgain: "Retry by expanding again",
  dataReplacedOldCallbacksAre: "Data replaced; old callbacks are invalid",
  oldResponsesMustNotAdd: "Old responses must not add Stale child",
  expandRemoteGroup: "Expand remote group",
  resolve: "Resolve",
  retry: "Retry",
  replaceData: "Replace data",
  resolveOld: "Resolve old",
  loadmoreUsesACallbackIts: "loadMore uses a callback; its return value does not supply children."
};

import { computed, ref, shallowRef } from "vue";
import type { CascaderOption } from "../types";
const roots = () => [{ value: "root", label: "Remote group", isLeaf: false }];
const options = ref<CascaderOption[]>(roots());
const requests = shallowRef<((children?: CascaderOption[]) => void)[]>([]);
const stale = shallowRef<((children?: CascaderOption[]) => void)[]>([]);
const statusKey = ref<keyof typeof inlineCopy>(
  "expandRemoteGroupThenSettle",
);
const status = computed(() => inlineCopy[statusKey.value]);
const loadMore = (
  _option: CascaderOption,
  done: (children?: CascaderOption[]) => void,
) => {
  requests.value = [...requests.value, done];
};
function settle(success: boolean) {
  const callbacks = requests.value;
  requests.value = [];
  callbacks.forEach((done) =>
    done(
      success
        ? [{ value: "leaf", label: "Loaded child", isLeaf: true }]
        : undefined,
    ),
  );
  statusKey.value = success ? "childrenReceived" : "retryByExpandingAgain";
}
function replace() {
  stale.value = [...stale.value, ...requests.value];
  requests.value = [];
  options.value = roots();
  statusKey.value = "dataReplacedOldCallbacksAre";
}
function settleOld() {
  stale.value.forEach((done) =>
    done([{ value: "stale", label: "Stale child", isLeaf: true }]),
  );
  stale.value = [];
  statusKey.value = "oldResponsesMustNotAdd";
}
</script>
<template>
  <c-space direction="column" size="lg">
    <c-cascader
      :options="options"
      edit-mode="direct"
      :load-more="loadMore"
      placeholder="Expand remote group"
    />
    <c-cascader-panel :options="options" :load-more="loadMore" />
    <c-space wrap>
      <c-button :disabled="!requests.length" @click="settle(true)">Resolve</c-button>
      <c-button :disabled="!requests.length" @click="settle(false)">Retry</c-button>
      <c-button @click="replace">Replace data</c-button>
      <c-button :disabled="!stale.length" @click="settleOld">Resolve old</c-button>
    </c-space>
    <p role="status">{{ status }}</p>
    <p>loadMore uses a callback; its return value does not supply children.</p>
  </c-space>
</template>
