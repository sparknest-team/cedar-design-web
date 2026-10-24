<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <c-space direction="column" size="md">
    <c-space v-for="size in sizes" :key="size" wrap size="md" align="center">
      <c-link :size="size" status="primary">{{ size }} 链接</c-link>
      <c-link :size="size" status="primary" icon>{{ size }} 图标</c-link>
      <c-link :size="size" loading>{{ size }} 加载中</c-link>
    </c-space>
  </c-space>
</template>
