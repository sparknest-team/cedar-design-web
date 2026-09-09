<template>
  <c-space direction="column" :style="{ width: '50%' }">
    <c-progress :percent="percent" />
    <br />
    <c-progress status="warning" :percent="percent" />
    <br />
    <c-progress status="danger" :percent="percent" />
    <br />
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-slider v-model="percent" :max="100" :step="10" :style="{ width: '150px' }" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(20)
</script>
