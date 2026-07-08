<template>
  <c-space size="lg" :style="{ width: '100%' }">
    <c-progress size="xs" :percent="percent" />
    <c-progress size="xs" type="warning" :percent="percent" />
    <c-progress size="xs" type="danger" :percent="percent" />
    <c-progress size="xs" type="success" :percent="percent" />
  </c-space>
  <c-space size="lg" :style="{ width: '100%', marginTop: '20px' }">
    <c-progress mode="circle" size="xs" :percent="percent" />
    <c-progress mode="circle" size="xs" type="warning" :percent="percent" />
    <c-progress mode="circle" size="xs" type="danger" :percent="percent" />
    <c-progress mode="circle" size="xs" type="success" :percent="percent" />
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-slider v-model="percent" :max="1" :step="0.1" :style="{ width: '150px' }" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(0.2)
</script>
