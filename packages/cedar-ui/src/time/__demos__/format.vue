<template>
  <c-space direction="column" fill>
    <c-time v-model="value" format="HH:mm" style="width: 100%; max-width: 320px" />
    <c-time v-model="valueSeconds" format="HH:mm:ss" style="width: 100%; max-width: 320px" />
    <c-time v-model="literalValue" format="[Time] HH:mm" style="width: 100%; max-width: 320px" />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('09:30')
const valueSeconds = ref('09:30:20')
const literalValue = ref('Time 09:30')
</script>
