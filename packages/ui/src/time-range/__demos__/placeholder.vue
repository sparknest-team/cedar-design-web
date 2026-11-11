<template>
  <c-time-range
    v-model="range"
    style="width: 280px"
    :placeholder="['开始时间', '结束时间']"
    clearable
  />
</template>

<script setup>
import { ref } from 'vue'

const range = ref()
</script>
