<script setup lang="ts">
</script>

<template>
  <c-icon
    size="28"
    color="rgb(var(--c-primary-6))"
    style="cursor: pointer"
    @click="Message.success('点击成功')"
  >
    <c-icon-check-circle />
  </c-icon>
</template>
