<template>
  <c-space direction="column">
    <c-search
      v-model="keyword"
      v-model:model-field="modelField"
      v-model:model="model"
      :style="inputStyle"
      :fields="fields"
      :recent-searches="recentSearches"
      :select-style="{ minWidth: '140px' }"
      default-field="name"
      placeholder="请输入搜索内容"
      search-button
      @change="handleChange"
      @search="handleSearch"
    />
    <c-button @click="resetModel">Reset Model</c-button>
    <div>最近提交：{{ latestChange || "-" }}</div>
    <pre v-if="latestResult">{{ JSON.stringify(latestResult, null, 2) }}</pre>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SearchResult, SearchField } from "@cedarjs/ui";

const inputStyle = { width: "420px" };
const keyword = ref("");
const modelField = ref("name");
const model = ref<Record<string, unknown>>({});
const recentSearches = ref<string[]>(["设备 A", "设备 B", "设备 C"]);
const latestChange = ref("");
const latestResult = ref<SearchResult>();

const fields: SearchField[] = [
  {
    value: "id",
    label: "设备 ID",
    placeholder: "请输入设备 ID",
  },
  {
    value: "name",
    label: "设备名称",
    placeholder: "请输入设备名称",
  },
  {
    value: "desc",
    label: "设备描述",
    placeholder: "请输入设备描述",
  },
];

function handleSearch(data: SearchResult) {
  recentSearches.value = data.recentSearches;
  latestResult.value = data;
}

function handleChange(value: string) {
  latestChange.value = value;
}

function resetModel() {
  model.value = {};
  keyword.value = "";
}
</script>
