<template>
  <c-date-range
    v-model="range"
    style="width: 380px"
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const range = ref()
</script>
