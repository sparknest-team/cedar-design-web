<template>
  <c-space direction="column" size="lg" fill>
    <c-textarea placeholder="请输入" :max-length="10" clearable show-word-limit />
    <c-textarea placeholder="请输入" :max-length="{ length: 10, errorOnly: true }" clearable show-word-limit />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
