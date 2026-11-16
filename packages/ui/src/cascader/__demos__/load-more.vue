<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("cascaderLoadMoreInline");

import { computed, ref, shallowRef } from "vue";
import type { CascaderOption } from "../types";
const roots = () => [{ value: "root", label: "Remote group", isLeaf: false }];
const options = ref<CascaderOption[]>(roots());
const requests = shallowRef<((children?: CascaderOption[]) => void)[]>([]);
const stale = shallowRef<((children?: CascaderOption[]) => void)[]>([]);
const statusKey = ref<keyof typeof inlineCopy.value>(
  "expandRemoteGroupThenSettle",
);
const status = computed(() => inlineCopy.value[statusKey.value]);
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
      :placeholder="inlineCopy.expandRemoteGroup"
    />
    <c-cascader-panel :options="options" :load-more="loadMore" />
    <c-space wrap>
      <c-button :disabled="!requests.length" @click="settle(true)">{{
        inlineCopy.resolve
      }}</c-button>
      <c-button :disabled="!requests.length" @click="settle(false)">{{
        inlineCopy.retry
      }}</c-button>
      <c-button @click="replace">{{ inlineCopy.replaceData }}</c-button>
      <c-button :disabled="!stale.length" @click="settleOld">{{
        inlineCopy.resolveOld
      }}</c-button>
    </c-space>
    <p role="status">{{ status }}</p>
    <p>{{ inlineCopy.loadmoreUsesACallbackIts }}</p>
  </c-space>
</template>
