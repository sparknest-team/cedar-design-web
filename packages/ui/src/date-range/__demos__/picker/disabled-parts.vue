<template>
  <c-date-range-picker :disabled-date="(current) => dayjs(current).day() === 0" />
</template>

<script setup>
import dayjs from 'dayjs'
</script>
