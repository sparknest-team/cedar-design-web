<template>
  <c-space direction="column" fill>
    <c-time-range v-model="range" style="width: 252px" clearable />
    <c-time-range v-model="disabledRange" style="width: 252px" disabled />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const range = ref(['09:00:00', '18:00:00'])
const disabledRange = ref(['09:00:00', '18:00:00'])
</script>
