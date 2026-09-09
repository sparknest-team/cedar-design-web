<script setup lang="ts">
const positions = ['start', 'end'] as const
</script>

<template>
  <c-space direction="column" :size="16">
    <c-space wrap><c-badge :content="1000" /><c-badge :content="1000" dot /></c-space>
    <c-space v-for="position in positions" :key="position" wrap>
      <c-badge mode="inline" :inline-position="position" :content="9" description="Messages" />
      <c-badge mode="inline" :inline-position="position" dot :content="9" description="Messages" />
    </c-space>
  </c-space>
</template>
