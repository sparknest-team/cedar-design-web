<script setup lang="ts">

import { ref } from "vue";
const busy = ref(true);
const value = ref("加载时仍可编辑");
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item label="加载状态"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item label="默认指示器"
        ><c-input
          v-model="value"
          :loading="busy"
          placeholder="加载时仍可编辑"
          loading-mode="default"
      /></c-form-item>
      <c-form-item label="底部加载线"
        ><c-input
          v-model="value"
          :loading="busy"
          placeholder="加载时仍可编辑"
          loading-mode="line"
      /></c-form-item>
    </c-form>
    <p>切换加载状态；加载时仍可输入和清空。</p>
  </c-space>
</template>
