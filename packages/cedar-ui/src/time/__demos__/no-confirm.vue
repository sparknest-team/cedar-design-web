<template>
  <c-time v-model="value" style="width: 200px" disable-confirm />
</template>

<script setup>
import { ref } from 'vue'

const value = ref()
</script>
