<script setup lang="ts">
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
</script>

<template>
  <c-space :size="16" wrap>
    <c-space v-for="fit in fits" :key="fit" direction="column" align="center" :size="8">
      <c-image width="120" height="120" :object-fit="fit" preview-disabled src="/cat.jpg" />
      <span class="label">{{ fit }}</span>
    </c-space>
  </c-space>
</template>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: 12px;
}
</style>
