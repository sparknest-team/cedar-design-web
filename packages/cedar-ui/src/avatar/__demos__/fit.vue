<template>
  <c-space align="flex-end" :size="24" wrap>
    <c-space v-for="fit in fits" :key="fit" direction="column" align="center" :size="8">
      <c-avatar image-url="/cat.jpg" :alt="fit" :object-fit="fit" :size="56" />
      <span class="label">{{ fit }}</span>
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
</script>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
