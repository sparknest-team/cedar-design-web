<template>
  <c-space direction="column" size="md">
    <c-auto-complete default-value="Cedar" :options="options" readonly />
    <c-auto-complete default-value="Maple" :options="options" disabled />
    <c-auto-complete default-value="Invalid" :options="options" error clearable />
  </c-space>
</template>

<script setup lang="ts">
const options = ['Cedar', 'Maple']
</script>
