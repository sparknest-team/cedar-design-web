<script setup lang="ts">
const inlineCopy = {
  expandRemoteGroupThenSettle: "展开 Remote group 后选择返回结果",
  childrenReceived: "子项已返回",
  retryByExpandingAgain: "done() 结束等待，可重新展开重试",
  dataReplacedOldCallbacksAre: "已替换数据，旧回调失效",
  oldResponsesMustNotAdd: "旧请求已返回，不应出现 Stale child",
  expandRemoteGroup: "展开远程分组",
  resolve: "返回子项",
  retry: "结束并重试",
  replaceData: "替换数据",
  resolveOld: "返回旧请求",
  loadmoreUsesACallbackIts: "load-more 使用 done(children) 成功、done() 结束等待；返回值不作为子项。"
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
      placeholder="展开远程分组"
    />
    <c-cascader-panel :options="options" :load-more="loadMore" />
    <c-space wrap>
      <c-button :disabled="!requests.length" @click="settle(true)">返回子项</c-button>
      <c-button :disabled="!requests.length" @click="settle(false)">结束并重试</c-button>
      <c-button @click="replace">替换数据</c-button>
      <c-button :disabled="!stale.length" @click="settleOld">返回旧请求</c-button>
    </c-space>
    <p role="status">{{ status }}</p>
    <p>load-more 使用 done(children) 成功、done() 结束等待；返回值不作为子项。</p>
  </c-space>
</template>
