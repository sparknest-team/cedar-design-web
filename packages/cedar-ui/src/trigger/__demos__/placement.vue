<script setup lang="ts">
const placements = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div class="trigger-placement-demo">
    <c-trigger v-for="placement in placements" :key="placement" trigger="click" :placement="placement" :popup-offset="10" show-arrow>
      <c-button variant="outline">{{ placement }}</c-button>
      <template #content><div class="trigger-placement-demo__panel">{{ placement }}</div></template>
    </c-trigger>
  </div>
</template>

<style scoped>
.trigger-placement-demo {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: calc(var(--c-sys-space-8) * 2);
  padding: calc(var(--c-sys-space-8) * 3);
}

.trigger-placement-demo__panel {
  padding: var(--c-sys-space-4) var(--c-sys-space-5);
  color: var(--c-sys-color-content-primary);
  background: var(--c-sys-color-surface-overlay);
  border: 1px solid var(--c-sys-color-border-default);
  border-radius: var(--c-sys-radius-sm);
}
</style>
