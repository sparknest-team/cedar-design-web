<template>
  <c-space direction="column" :size="20">
    <c-space align="flex-end" :size="16" wrap>
      <c-space v-for="size in numericSizes" :key="size" direction="column" align="center" :size="8">
        <c-avatar :size="size">{{ labels[size] }}</c-avatar>
        <span class="label">{{ size }}px</span>
      </c-space>
    </c-space>

    <c-space align="flex-end" :size="16" wrap>
      <c-space v-for="size in imageSizes" :key="size" direction="column" align="center" :size="8">
        <c-avatar image-url="/cat.jpg" :alt="`${size}px`" :size="size" />
        <span class="label">{{ size }}px</span>
      </c-space>
    </c-space>

    <c-space align="flex-end" :size="16" wrap>
      <c-space v-for="size in cssSizes" :key="size" direction="column" align="center" :size="8">
        <c-avatar :size="size">Aa</c-avatar>
        <span class="label">{{ size }}</span>
      </c-space>
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
const numericSizes = [24, 32, 40, 48, 64] as const
const labels = { 24: 'A', 32: 'B', 40: 'C', 48: 'D', 64: 'E' } as const
const imageSizes = [28, 36, 48, 64, 78] as const
const cssSizes = ['3rem', '2.5em', '48px'] as const
</script>

<style scoped>
.label {
  color: var(--c-color-text-3);
  font-size: var(--c-font-size-sm);
}
</style>
