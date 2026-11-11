<template>
  <c-space direction="column">
    <c-search
      v-model="keyword"
      :style="inputStyle"
      placeholder="业务侧使用 localStorage 保存搜索历史"
      :recent-searches="recentSearches"
      @search="handleSearch"
    />
    <c-button @click="clearRecentSearches">Clear History</c-button>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SearchResult } from "@cedar-design/ui-vue";

const inputStyle = { width: "360px" };
const storageKey = "__cedar_search_history__";

const keyword = ref("");
const recentSearches = ref<string[]>(loadRecentSearches());

function loadRecentSearches() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function saveRecentSearches(list: string[]) {
  localStorage.setItem(storageKey, JSON.stringify(list));
  recentSearches.value = list;
}

function handleSearch(data: SearchResult) {
  saveRecentSearches(data.recentSearches);
}

function clearRecentSearches() {
  saveRecentSearches([]);
}
</script>
