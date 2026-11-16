<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("inputLoadingInline");

import { ref } from "vue";
const busy = ref(true);
const value = ref("加载时仍可编辑");
</script>
<template>
  <c-space direction="column" :size="16" style="width: 100%">
    <c-form layout="vertical">
      <c-form-item :label="inlineCopy.loading"
        ><c-switch v-model="busy"
      /></c-form-item>
      <c-form-item :label="inlineCopy.default"
        ><c-input
          v-model="value"
          :loading="busy"
          :placeholder="inlineCopy.editableWhileLoading"
          loading-mode="default"
      /></c-form-item>
      <c-form-item :label="inlineCopy.line"
        ><c-input
          v-model="value"
          :loading="busy"
          :placeholder="inlineCopy.editableWhileLoading"
          loading-mode="line"
      /></c-form-item>
    </c-form>
    <p>{{ inlineCopy.loadingKeepsTheInputEditable }}</p>
  </c-space>
</template>
