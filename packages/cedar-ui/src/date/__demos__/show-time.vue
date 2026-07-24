<template>
  <c-date v-model="value" style="width: 250px" show-time clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>
