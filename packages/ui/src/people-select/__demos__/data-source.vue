<script setup lang="ts">
import { ref } from "vue";
import { useAsyncData } from "@cedar-design/use-vue";
import type { PeopleSelectOption } from "@cedar-design/ui-vue";

const value = ref("mengshuai");
const people: PeopleSelectOption[] = [
  { value: "mengshuai", label: "孟帅" },
  { value: "wujiaming", label: "吴甲明" },
];
// This zero-argument function can be reused by any field. Map real responses here.
const loadPeople = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return people;
};
const {
  data: options,
  loading,
  error,
  execute,
  refresh,
} = useAsyncData(loadPeople, {
  initialData: [] as PeopleSelectOption[],
  debounce: 250,
  cacheTime: 30_000,
});
function search(query: string) {
  // Retire old candidates immediately, including during the debounce window.
  options.value = [];
  void execute({
    cacheKey: query,
    loader: async ({ signal }) => {
      const result = await loadPeople();
      if (signal.aborted) return [];
      return result.filter((person) =>
        `${person.value} ${person.label}`.includes(query),
      );
    },
  });
}
</script>

<template>
  <c-space direction="column" fill>
    <p>挂载加载一次。搜索在外部防抖，只接受最后一次结果；相同查询短时缓存。</p>
    <c-people-select
      v-model="value"
      :options="options"
      :loading="loading"
      :filter-option="false"
      :search-delay="0"
      :label="people.find((person) => person.value === value)?.label"
      placeholder="搜索姓名或 ID"
      clearable
      @search="search"
    />
    <p v-if="error" role="alert">加载失败，请重试。</p>
    <c-button @click="refresh()">重新加载当前查询</c-button>
    <p>当前 ID：{{ value || "未选择" }}</p>
  </c-space>
</template>
