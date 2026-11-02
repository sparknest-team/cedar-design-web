<script setup lang="ts">
import { ref } from "vue";
import type { PeopleSelectOption } from "@cedar-design/ui";

const value = ref("mengshuai");
const people: PeopleSelectOption[] = [
  { value: "mengshuai", label: "孟帅" },
  { value: "wujiaming", label: "吴甲明" },
];
</script>

<template>
  <c-space direction="column" fill>
    <c-people-select
      v-model="value"
      :options="people"
      placeholder="选择人员"
      clearable
    />
    <c-people-select :model-value="value" :options="people" is-label />
    <p>当前 ID：{{ value || "未选择" }}</p>
  </c-space>
</template>
