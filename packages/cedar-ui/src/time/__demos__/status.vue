<template>
  <c-space direction="column" fill>
    <c-time v-model="value" style="width: 200px" clearable />
    <c-time v-model="disabledValue" style="width: 200px" disabled />
    <c-time v-model="readonlyValue" style="width: 200px" readonly />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('09:30:00')
const disabledValue = ref('09:30:00')
const readonlyValue = ref('09:30:00')
</script>
