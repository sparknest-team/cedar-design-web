<script setup lang="ts">
const inlineCopy = {
  couldNotFetchTheTitle: "获取标题失败，请重试"
};

import { ref } from "vue";

const links = ref<string[]>([]);
const error = ref("");
const submitted = ref<string[] | null>(null);

// 模拟接口：实际业务在服务端解析链接标题，并将 signal 传给 fetch。
async function searchLinks(query: string, { signal }: { signal: AbortSignal }) {
  let url: URL;
  try {
    url = new URL(query.trim());
    if (
      !["http:", "https:"].includes(url.protocol) ||
      !url.hostname.includes(".")
    )
      return [];
  } catch {
    return [];
  }
  const titles: Record<string, string> = {
    "vuejs.org": "Vue.js",
    "github.com": "GitHub",
  };
  if (!titles[url.hostname]) return [];
  error.value = "";
  await new Promise<void>((resolve, reject) => {
    const cancel = () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    };
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", cancel);
      resolve();
    }, 400);
    if (signal.aborted) cancel();
    else signal.addEventListener("abort", cancel, { once: true });
  });
  return [{ value: query.trim(), label: titles[url.hostname] }];
}
</script>

<template>
  <c-space direction="column" style="width: 100%" :size="12">
    <p>粘贴或输入 https://vuejs.org 或 https://github.com；唯一结果自动添加，模型保存原始链接。</p>
    <c-input-tag
      v-model="links"
      :options="searchLinks"
      :min-search-length="8"
      :search-delay="300"
      auto-commit-single
      unique-value
      placeholder="粘贴或输入链接"
      aria-label="粘贴或输入链接"
      clearable
      @load-error="error = inlineCopy.couldNotFetchTheTitle"
    />
    <p v-if="error" role="alert">{{ error }}</p>
    <c-button :disabled="!links.length" @click="submitted = [...links]">提交</c-button>
    <pre v-if="submitted !== null" aria-live="polite">{{
      JSON.stringify({ links: submitted }, null, 2)
    }}</pre>
  </c-space>
</template>
