<template>
  <c-space direction="column" size="lg" fill>
    <p>长度按 UTF-16 码元计算；试着输入 123456789😀Z，默认截断保留 123456789，不拆开 emoji。</p>
    <c-textarea
      v-model="limited"
      placeholder="超过 10 个字符会截断"
      :max-length="10"
      clearable
      show-word-limit
    />
    <c-textarea
      v-model="errorOnly"
      placeholder="超过 10 个字符后保留内容并显示错误"
      :max-length="{ length: 10, errorOnly: true }"
      clearable
      show-word-limit
    />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const limited = ref("");
const errorOnly = ref("超过长度的内容会保留");
</script>
