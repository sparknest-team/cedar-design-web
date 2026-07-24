<template>
  <c-space direction="column" fill>
    <c-time v-model="value" style="width: 200px" />
    <c-time v-model="value12" use12-hours style="width: 200px" />
    <c-time v-model="valueStep" :step="{ hour: 2, minute: 5, second: 10 }" style="width: 200px" />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const value12 = ref()
const valueStep = ref()
</script>
