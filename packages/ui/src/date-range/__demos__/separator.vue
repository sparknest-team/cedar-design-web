<template>
  <c-date-range
    v-model="range"
    style="width: 300px"
    separator=" 至 "
    :placeholder="['开始日期', '结束日期']"
    clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const range = ref()
</script>
