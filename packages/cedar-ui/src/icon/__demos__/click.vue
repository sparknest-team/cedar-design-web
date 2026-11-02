<script setup lang="ts">
import { Message } from "@cedar-design/ui";
</script>
<template>
  <c-button
    variant="text"
    round
    aria-label="确认操作"
    @click="Message.success('点击成功')"
  >
    <template #icon><c-icon-check-circle /></template>
  </c-button>
</template>
