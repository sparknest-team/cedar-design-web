<template>
  <c-space direction="column" fill>
    <c-date v-model="value" style="width: 200px" clearable />
    <c-date v-model="disabledValue" style="width: 200px" disabled />
    <c-date v-model="readonlyValue" style="width: 200px" readonly />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2024-01-15')
const disabledValue = ref('2024-01-15')
const readonlyValue = ref('2024-01-15')
</script>
