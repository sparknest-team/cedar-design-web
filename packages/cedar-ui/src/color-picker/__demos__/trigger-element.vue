<template>
  <c-space>
    <c-color-picker v-model="value" size="xs">
      <c-tag :color="value">
        {{ value }}
      </c-tag>
    </c-color-picker>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('#00BEBE')
</script>
