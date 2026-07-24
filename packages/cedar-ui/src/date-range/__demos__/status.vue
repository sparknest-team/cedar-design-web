<template>
  <c-space direction="column" fill>
    <c-date-range v-model="range" style="width: 300px" clearable />
    <c-date-range v-model="disabledRange" style="width: 300px" disabled />
    <c-date-range
      v-model="halfDisabled"
      style="width: 300px"
      :disabled="[true, false]"
      clearable
    />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const range = ref(['2024-01-01', '2024-01-15'])
const disabledRange = ref(['2024-01-01', '2024-01-15'])
const halfDisabled = ref(['2024-01-01', '2024-01-15'])
</script>
