<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("inputTagLoadingInline");

import { ref } from "vue";
const loading = ref(true);
</script>
<template>
  <c-space direction="column" style="width: 100%" :size="16">
    <c-form layout="vertical"
      ><c-form-item :label="inlineCopy.loading"
        ><c-switch v-model="loading" /></c-form-item
    ></c-form>
    <c-input-tag :loading="loading" :default-value="[inlineCopy.example]" />
    <p>{{ inlineCopy.loadingIsControlledByBusiness }}</p>
  </c-space>
</template>
