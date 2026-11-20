<script setup lang="ts">

import { ref } from "vue";
const theme = ref<"light" | "dark">("dark");
</script>
<template>
  <div>
    <c-button @click="theme = theme === 'dark' ? 'light' : 'dark'">Toggle local theme</c-button>
    <c-theme-provider :theme="theme" class="theme-region">
      <p>Outer: {{ theme }}</p>
      <c-button status="primary">Themed button</c-button>
      <c-select
        :options="[{ label: 'Body popup inherits theme', value: 1 }]"
        placeholder="Open popup"
      />
      <c-theme-provider theme="light" class="theme-region">
        <p>Nested light</p>
        <c-button variant="outline">Light button</c-button>
      </c-theme-provider>
    </c-theme-provider>
    <p>Outside is unchanged</p>
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
