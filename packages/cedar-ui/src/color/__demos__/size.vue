<template>
  <c-space>
    <c-color v-model="value" size="xs" />
    <c-color v-model="value" size="sm" />
    <c-color v-model="value" size="md" show-text />
    <c-color v-model="value" size="lg" show-text />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('#165DFF')
</script>
