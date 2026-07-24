<template>
  <c-space direction="column" fill>
    <c-date-range v-model="dateRange" style="width: 300px" clearable />
    <c-date-range v-model="weekRange" type="week" style="width: 300px" clearable />
    <c-date-range v-model="monthRange" type="month" style="width: 300px" clearable />
    <c-date-range v-model="yearRange" type="year" style="width: 300px" clearable />
    <c-date-range v-model="quarterRange" type="quarter" style="width: 300px" clearable />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const dateRange = ref()
const weekRange = ref()
const monthRange = ref()
const yearRange = ref()
const quarterRange = ref()
</script>
