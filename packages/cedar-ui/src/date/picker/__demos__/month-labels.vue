<script setup lang="ts">
import { ref } from 'vue'
const abbreviation = ref(true)
</script>

<template>
  <c-checkbox v-model="abbreviation">月份缩写</c-checkbox>
  <c-date-picker type="month" picker-value="2025-01" :abbreviation="abbreviation" :disable-confirm="false" />
  <c-date-range-picker type="month" :abbreviation="abbreviation" />
</template>
