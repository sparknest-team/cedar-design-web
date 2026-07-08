<template>
  <c-space direction="column" size="lg" :style="{ width: '100%' }">
    <c-space>
      <span>Animation</span>
      <c-switch v-model="animation" />
    </c-space>
    <c-skeleton :animation="animation">
      <c-space direction="column" :style="{ width: '100%' }" size="lg">
        <c-skeleton-line :rows="3" />
        <c-skeleton-shape  />
      </c-space>
    </c-skeleton>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const animation = ref(true)
</script>
