<template>
  <c-space direction="column" fill>
    <c-time v-model="value" style="width: 200px" use12-hours />
    <c-time v-model="valueFormat" style="width: 200px" use12-hours format="hh:mm A" />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
const valueFormat = ref()
</script>
