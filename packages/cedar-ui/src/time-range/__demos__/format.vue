<template>
  <c-space direction="column" fill>
    <c-time-range v-model="range" style="width: 252px" clearable />
    <c-time-range v-model="range12" use12-hours style="width: 252px" clearable />
    <c-time-range
      v-model="rangeStep"
      :step="{ hour: 2, minute: 5, second: 10 }"
      style="width: 252px"
      clearable
    />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const range = ref()
const range12 = ref()
const rangeStep = ref()
</script>
