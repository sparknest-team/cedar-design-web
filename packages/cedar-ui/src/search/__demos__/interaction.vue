<template>
  <c-space direction="column">
    <c-search
      v-model="keyword"
      :style="inputStyle"
      placeholder="输入后失焦或按 Enter 提交"
      clearable
      search-button
      button-text="搜索"
      @input="handleInput"
      @change="handleChange"
      @clear="record('clear')"
      @search="handleSearch"
    />
    <div>当前值：{{ keyword || "-" }}</div>
    <div>事件顺序：{{ events.join(" → ") || "-" }}</div>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SearchResult } from "@cedarjs/ui";

const inputStyle = { width: "420px" };
const keyword = ref("");
const events = ref<string[]>([]);

function record(name: string) {
  events.value = [...events.value.slice(-4), name];
}

function handleInput() {
  record("input");
}

function handleChange() {
  record("change");
}

function handleSearch(_result: SearchResult) {
  record("search");
}
</script>
