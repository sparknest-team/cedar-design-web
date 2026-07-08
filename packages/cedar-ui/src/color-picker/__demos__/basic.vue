<template>
  <c-space>
    <c-color-picker v-model="value" />
    <c-color-picker defaultValue="#00BEBE" showText disabledAlpha />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('#00BEBE')
</script>
