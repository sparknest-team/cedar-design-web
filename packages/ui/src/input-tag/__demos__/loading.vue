<script setup lang="ts">
const inlineCopy = {
  example: "示例"
};

import { ref } from "vue";
const loading = ref(true);
</script>
<template>
  <c-space direction="column" style="width: 100%" :size="16">
    <c-form layout="vertical"
      ><c-form-item label="加载状态"
        ><c-switch v-model="loading" /></c-form-item
    ></c-form>
    <c-input-tag :loading="loading" :default-value="[inlineCopy.example]" />
    <p>通过 loading 显式控制等待展示，普通事件返回 Promise 不会自动加载。</p>
  </c-space>
</template>
