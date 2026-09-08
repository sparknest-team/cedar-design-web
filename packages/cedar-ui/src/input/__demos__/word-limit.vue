<template>
  <c-space direction="column">
    <c-input v-model="normalValue" :max-length="10" clearable show-word-limit placeholder="超出后截断" />
    <c-input
      v-model="errorOnlyValue"
      :max-length="{ length: 6, errorOnly: true }"
      show-word-limit
      placeholder="允许超出，但标记错误"
    />
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const normalValue = ref('Cedar')
const errorOnlyValue = ref('超过六个字符后显示错误')
</script>
