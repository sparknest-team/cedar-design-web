<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea v-model="value" placeholder="受控文本域" clearable />
    <c-textarea default-value="非受控初始内容" placeholder="非受控文本域" />
    <c-textarea v-model.trim="trimValue" placeholder="失焦时去除首尾空白" />
    <span>当前值：{{ value || "-" }}</span>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const trimValue = ref("");
</script>
