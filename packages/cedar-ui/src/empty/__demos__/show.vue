<script setup lang="ts">
import { ref } from 'vue'
const showIcon = ref(true)
const showDescription = ref(true)
</script>

<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <c-button @click="showIcon = !showIcon">Toggle icon</c-button>
      <c-button @click="showDescription = !showDescription">Toggle description</c-button>
    </c-space>
    <c-empty data-demo-empty description="Dynamic empty state" :show-icon="showIcon" :show-description="showDescription" />
  </c-space>
</template>
