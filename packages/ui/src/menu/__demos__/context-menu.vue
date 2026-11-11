<script setup lang="ts">
const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
]
</script>

<template>
  <c-menu trigger="contextMenu" align-point :options="options" style="display: block">
    <div class="c-menu-context-target">右键点击</div>
  </c-menu>
</template>

<style scoped>
.c-menu-context-target {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  background-color: var(--c-sys-color-surface-muted);
}
</style>
