<script setup lang="ts">
import { ref } from "vue";
const date = ref("2026-09-10");
const month = ref("2026-09");
const range = ref(["09-10", "10-10"]);
</script>
<template>
  <c-space direction="column">
    <c-date v-model="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD" />
    <p>String: {{ JSON.stringify(date) }}</p>
    <c-date
      v-model="month"
      type="month"
      format="YYYY-MM"
      value-format="YYYY-MM"
    />
    <p>Month string: {{ JSON.stringify(month) }}</p>
    <c-date-range v-model="range" format="MM-DD" value-format="MM-DD" />
    <p>Month/day array: {{ JSON.stringify(range) }}</p>
  </c-space>
</template>
