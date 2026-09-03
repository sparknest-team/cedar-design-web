<template>
  <c-space align="center" :size="24">
    <div v-for="fit in fits" :key="fit" style="text-align: center">
      <c-avatar
        image-url="/cat.jpg"
        :alt="fit"
        :object-fit="fit"
        :size="56"
      />
      <div style="margin-top: 8px">{{ fit }}</div>
    </div>
  </c-space>
</template>

<script lang="ts" setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'] as const
</script>
