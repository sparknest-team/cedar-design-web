<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div class="trigger-controlled-demo">
    <c-space>
      <c-button @click="open = true">外部打开</c-button>
      <c-button variant="outline" @click="open = false">外部关闭</c-button>
    </c-space>
    <c-trigger v-model:open="open" trigger="click" placement="bottom-start" :popup-offset="10" :popup-translate="[16, 0]">
      <c-button variant="text">受控触发元素</c-button>
      <template #content><div class="trigger-controlled-demo__panel">open = {{ open }}</div></template>
    </c-trigger>
  </div>
</template>

<style scoped>
.trigger-controlled-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--c-sys-space-8);
  padding: calc(var(--c-sys-space-8) * 2) var(--c-sys-space-6);
}

.trigger-controlled-demo__panel {
  padding: var(--c-sys-space-5) var(--c-sys-space-6);
  color: var(--c-sys-color-content-primary);
  background: var(--c-sys-color-surface-overlay);
  border: 1px solid var(--c-sys-color-border-default);
  border-radius: var(--c-sys-radius-sm);
}
</style>
