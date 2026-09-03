<template>
  <c-space direction="column" :size="16">
    <c-space align="center" :size="16">
      <c-avatar>{{ text }}</c-avatar>
      <c-avatar shape="square">{{ text }}</c-avatar>
      <c-avatar :auto-fix-font-size="false">{{ text }}</c-avatar>
    </c-space>
    <c-input v-model="text" :style="{ width: '200px' }" placeholder="输入文字" />
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('Cedar')
</script>
