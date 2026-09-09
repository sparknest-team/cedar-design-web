<template>
  <c-search
    v-model="keyword"
    :style="{ width: '420px' }"
    placeholder="自定义前后缀与按钮"
    clearable
    search-button
  >
    <template #prefix><span aria-hidden="true">⌕</span></template>
    <template #suffix><span>⌘ K</span></template>
    <template #clear-icon="{ clear }">
      <button type="button" aria-label="清空" @click="clear">×</button>
    </template>
    <template #button-default>查找</template>
  </c-search>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const keyword = ref("Maple");
</script>
