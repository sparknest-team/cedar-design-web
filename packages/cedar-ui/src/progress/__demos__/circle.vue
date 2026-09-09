<template>
  <c-space size="lg">
    <c-progress mode="circle" :percent="percent" />
    <c-progress mode="circle" status="warning" :percent="percent" />
    <c-progress mode="circle" status="danger" :percent="percent" />
    <c-progress mode="circle" status="success" :percent="percent" />
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-slider v-model="percent" :max="100" :step="10" :style="{ width: '150px' }" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(20)
</script>
