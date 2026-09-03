<template>
  <c-space size="xl" wrap>
    <c-statistic title="未开启等宽" :value="count" show-group-separator />
    <c-statistic title="等宽数字" :value="count" show-group-separator tabular-nums />
  </c-space>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const values = [8, 88, 888, 1888, 12880]
const index = ref(0)
const count = ref(values[0])
let timer = 0

onMounted(() => {
  timer = window.setInterval(() => {
    index.value = (index.value + 1) % values.length
    count.value = values[index.value]
  }, 800)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})
</script>
