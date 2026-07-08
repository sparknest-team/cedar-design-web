<template>
  <c-space direction="column" :style="{ width: '50%' }">
    <c-progress :percent="percent" />
    <br />
    <c-progress type="warning" :percent="percent" />
    <br />
    <c-progress type="danger" :percent="percent" />
    <br />
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-slider v-model="percent" :max="1" :step="0.1" :style="{ width: '150px' }" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const percent = ref(0.2)
</script>
