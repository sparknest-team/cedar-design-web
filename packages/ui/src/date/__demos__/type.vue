<template>
  <c-space direction="column" fill>
    <c-date v-model="date" style="width: 200px" clearable />
    <c-date v-model="week" type="week" style="width: 200px" clearable />
    <c-date v-model="month" type="month" style="width: 200px" clearable />
    <c-date v-model="year" type="year" style="width: 200px" clearable />
    <c-date v-model="quarter" type="quarter" style="width: 200px" clearable />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const date = ref()
const week = ref()
const month = ref()
const year = ref()
const quarter = ref()
</script>
