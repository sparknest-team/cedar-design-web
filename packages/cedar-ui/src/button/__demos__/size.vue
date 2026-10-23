<script setup lang="ts">
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space v-for="size in sizes" :key="size" align="center" wrap :size="12">
      <span>{{ size }}</span>
      <c-input
        :size="size"
        :aria-label="`Input ${size}`"
        placeholder="Input"
        style="width: 140px"
      />
      <c-button :size="size">Button</c-button>
      <c-button :size="size"
        ><template #icon><c-icon-search /></template>Search</c-button
      >
    </c-space>
  </c-space>
</template>
