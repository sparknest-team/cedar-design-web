<template>
  <c-space direction="column" fill>
    <c-time-range v-model="range" format="HH:mm" style="width: 100%; max-width: 360px" clearable />
    <c-time-range v-model="literalRange" format="[Time] HH:mm" style="width: 100%; max-width: 360px" clearable />
    <c-time-range
      v-model="rangeSeconds"
      format="HH:mm:ss"
      style="width: 100%; max-width: 360px"
      clearable
    />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const range = ref(['09:30', '18:00'])
const literalRange = ref(['Time 09:30', 'Time 18:00'])
const rangeSeconds = ref(['09:30:20', '18:00:00'])
</script>
