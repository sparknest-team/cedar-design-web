<script setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("dividerWithTextInline");

import { ref } from "vue";

const rtl = ref(false);
</script>

<template>
  <div>
    <c-checkbox v-model="rtl">RTL</c-checkbox>
    <div :dir="rtl ? 'rtl' : 'ltr'">
      <c-divider text-align="start" :description="inlineCopy.start" />
      <c-divider :description="inlineCopy.center" />
      <c-divider text-align="end" :description="inlineCopy.end" />
    </div>
  </div>
</template>
