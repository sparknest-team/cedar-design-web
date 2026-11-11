<template>
  <c-space wrap size="lg" :style="{ width: '100%' }">
    <c-progress size="xs" :percent="percent" />
    <c-progress size="xs" status="warning" :percent="percent" />
    <c-progress size="xs" status="danger" :percent="percent" />
    <c-progress size="xs" status="success" :percent="percent" />
  </c-space>
  <c-space wrap size="lg" :style="{ width: '100%', marginTop: '20px' }">
    <c-progress mode="circle" size="xs" :percent="percent" />
    <c-progress mode="circle" size="xs" status="warning" :percent="percent" />
    <c-progress mode="circle" size="xs" status="danger" :percent="percent" />
    <c-progress mode="circle" size="xs" status="success" :percent="percent" />
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-slider v-model="percent" :max="100" :step="10" :style="{ width: '150px' }" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(20)
</script>
