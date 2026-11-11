<script setup lang="ts">
import { onBeforeUnmount, onDeactivated, ref, shallowRef } from "vue";
import type { UploadFileItem } from "@cedar-design/ui-vue";

const files = ref<UploadFileItem[]>([
  {
    uid: "sample",
    name: "sample.txt",
    type: "text/plain",
    status: "success",
    percent: 100,
  },
]);
const allow = ref(false);
const manual = ref(false);
const blocked = ref(false);
const attempts = ref(0);
const removed = ref(0);
const uploadRef = ref();
const mounted = ref(true);
const pending = shallowRef<
  Array<{
    resolve: (accepted: boolean) => void;
    reject: (error: Error) => void;
  }>
>([]);
const beforeRemove = () => {
  attempts.value++;
  if (!manual.value) return allow.value;
  return new Promise<boolean>((resolve, reject) => {
    pending.value = [...pending.value, { resolve, reject }];
  });
};
function settle(accepted: boolean | "reject") {
  const jobs = pending.value;
  pending.value = [];
  jobs.forEach((job) =>
    accepted === "reject"
      ? job.reject(new Error("Local removal rejection"))
      : job.resolve(accepted),
  );
}
function replace() {
  files.value = files.value.map((item) => ({
    ...item,
    name: "replacement.txt",
    type: "text/plain",
    file: new File(["local replacement"], "replacement.txt", {
      type: "text/plain",
    }),
  }));
}
function restore() {
  files.value = [
    {
      uid: "sample",
      name: "restored.txt",
      type: "text/plain",
      status: "success",
      percent: 100,
      file: new File(["local sample"], "restored.txt", { type: "text/plain" }),
    },
  ];
}
onBeforeUnmount(() => settle(false));
onDeactivated(() => settle(false));
</script>

<template>
  <section class="remove-confirm-demo">
    <c-checkbox v-model="allow"> 允许此操作</c-checkbox>
    <c-checkbox v-model="manual"> 手动异步确认</c-checkbox>
    <c-checkbox v-model="blocked"> 禁用上传组件</c-checkbox>
    <c-button
      html-type="button"
      :disabled="!pending.length"
      @click="settle(true)"
      >确认删除</c-button
    >
    <c-button
      html-type="button"
      :disabled="!pending.length"
      @click="settle(false)"
      >取消删除</c-button
    >
    <c-button
      html-type="button"
      :disabled="!pending.length"
      @click="settle('reject')"
      >异常拒绝删除</c-button
    >
    <c-button html-type="button" :disabled="!files.length" @click="replace"
      >替换同 UID 文件</c-button
    >
    <c-button html-type="button" @click="uploadRef?.reset()"
      >重置上传队列</c-button
    >
    <c-button html-type="button" @click="restore">恢复示例文件</c-button>
    <c-checkbox v-model="mounted"> 激活上传组件</c-checkbox>
    <KeepAlive>
      <c-upload
        v-if="mounted"
        ref="uploadRef"
        v-model="files"
        :before-remove="beforeRemove"
        :disabled="blocked"
        @remove="removed++"
      />
    </KeepAlive>
    <p role="status">
      文件：{{ files.length }}；等待：{{ pending.length }}；钩子：{{
        attempts
      }}；删除：{{ removed }}
    </p>
  </section>
</template>
