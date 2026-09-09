<template>
  <c-nav-menu mode="horizontal" :options="options" v-model="selected" />
</template>
<script setup lang="ts">
import { options } from './data'
import { ref } from 'vue'
const selected = ref<string | number | null>('cloud')
</script>
