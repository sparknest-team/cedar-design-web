<template>
  <c-time-range v-model="range" style="width: 280px" show-next-day clearable />
</template>

<script setup>
import { ref } from 'vue'

const range = ref(['22:00:00', '06:00:00'])
</script>
