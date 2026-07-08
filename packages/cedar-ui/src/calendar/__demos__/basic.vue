<template>
  <c-calendar v-model="value" />
  select: {{ value }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date('2023-01-01'))
</script>
