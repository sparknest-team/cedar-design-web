<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const allowEmpty = ref(false);
const filter = ref(true);
const shouldOpen = (text: string) => allowEmpty.value || text.length >= 2;
const options = ["Cedar", "Maple", "Vue"];
</script>
<template>
  <c-space direction="column" size="md">
    <c-checkbox v-model="allowEmpty"> 允许空输入展开</c-checkbox>
    <c-checkbox v-model="filter"> 按输入过滤候选</c-checkbox>
    <c-auto-complete
      v-model="value"
      :options="options"
      :filter-option="filter"
      :should-open="shouldOpen"
      placeholder="默认输入两个字符后展开"
    />
    <p>展开条件不负责过滤；即使允许展开，没有匹配候选也不显示菜单。</p>
  </c-space>
</template>
