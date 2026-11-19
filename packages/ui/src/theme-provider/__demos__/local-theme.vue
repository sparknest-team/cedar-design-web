<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("themeProviderLocalThemeInline");

import { ref } from "vue";
const theme = ref<"light" | "dark">("dark");
</script>
<template>
  <div>
    <c-button @click="theme = theme === 'dark' ? 'light' : 'dark'">{{
      inlineCopy.toggleLocalTheme
    }}</c-button>
    <c-theme-provider :theme="theme" class="theme-region">
      <p>{{ inlineCopy.outer }} {{ theme }}</p>
      <c-button status="primary">{{ inlineCopy.themedButton }}</c-button>
      <c-form-item layout="vertical" hide-label>
<c-select
        :options="[{ label: 'Body popup inherits theme', value: 1 }]"
        :placeholder="inlineCopy.openPopup"
      />
</c-form-item>
      <c-theme-provider theme="light" class="theme-region">
        <p>{{ inlineCopy.nestedLight }}</p>
        <c-button variant="outline">{{ inlineCopy.lightButton }}</c-button>
      </c-theme-provider>
    </c-theme-provider>
    <p>{{ inlineCopy.outsideIsUnchanged }}</p>
  </div>
</template>
<style scoped>
.theme-region {
  margin-top: 16px;
  padding: 16px;
  color: var(--c-color-text-1);
  background: var(--c-color-bg-2);
  border: 1px solid var(--c-color-border-2);
}
</style>
