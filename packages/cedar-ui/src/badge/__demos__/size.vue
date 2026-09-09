<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <c-space direction="column" :size="24">
    <c-space wrap
      ><c-badge v-for="size in sizes" :key="size" :size="size" :content="1" mode="inline" :description="size"
    /></c-space>
    <c-space wrap
      ><c-badge
        v-for="size in sizes"
        :key="size"
        :size="size"
        :content="1"
        dot
        mode="inline"
        :description="size"
    /></c-space>
    <c-space wrap :size="24"
      ><c-badge v-for="size in sizes" :key="size" :size="size" :content="1"
        ><span
          style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
          >Inbox</span
        ></c-badge
      ></c-space
    >
    <c-space wrap :size="24"
      ><c-badge v-for="size in sizes" :key="size" :size="size" :content="1" dot
        ><span
          style="display: inline-block; padding: 12px; border: 1px solid currentColor; border-radius: 4px"
          >Inbox</span
        ></c-badge
      ></c-space
    >
  </c-space>
</template>
