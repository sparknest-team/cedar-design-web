<template>
  <c-space direction="column" size="lg">
    <c-radio-group v-model="size" type="button">
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    <c-list :size="size">
      <template #header> List title </template>
      <c-list-item>Beijing Bytedance Technology Co., Ltd.</c-list-item>
      <c-list-item>Bytedance Technology Co., Ltd.</c-list-item>
      <c-list-item>Beijing Toutiao Technology Co., Ltd.</c-list-item>
      <c-list-item>Beijing Volcengine Technology Co., Ltd.</c-list-item>
      <c-list-item>China Beijing Bytedance Technology Co., Ltd.</c-list-item>
    </c-list>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('md')
</script>
