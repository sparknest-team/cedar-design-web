<template>
  <c-space direction="column" size="lg" :style="{ width: '50%' }">
    <c-radio-group v-model="size" type="button">
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    <c-progress :size="size" :percent="0.2" />
    <c-progress type="warning" :size="size" :percent="0.2" />
    <c-progress type="danger" :size="size" :percent="0.2" />
    <c-space>
      <c-progress mode="circle" :size="size" :percent="0.2" />
      <c-progress mode="circle" type="warning" :size="size" :percent="0.2" />
      <c-progress mode="circle" type="danger" :size="size" :percent="0.2" />
    </c-space>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('md')
</script>
