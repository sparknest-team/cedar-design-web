<template>
  <c-time-range v-model="range" style="width: 280px" use12-hours clearable />
</template>

<script setup>
import { ref } from 'vue'

const range = ref()
</script>
