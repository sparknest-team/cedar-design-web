<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("drawerDividersInline");

import { ref } from "vue";

const open = ref(false);
const topDivider = ref(false);
const bottomDivider = ref(false);
</script>

<template>
  <c-button @click="open = true">{{ inlineCopy.dividers }}</c-button>
  <c-drawer
    v-model:open="open"
    :title="inlineCopy.dividers"
    :top-divider="topDivider"
    :bottom-divider="bottomDivider"
  >
    <c-space direction="column">
      <c-checkbox v-model="topDivider">top-divider</c-checkbox>
      <c-checkbox v-model="bottomDivider">bottom-divider</c-checkbox>
      <p>{{ inlineCopy.dividersAreOffByDefault }}</p>
    </c-space>
  </c-drawer>
</template>
