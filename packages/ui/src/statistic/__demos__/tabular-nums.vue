<template>
  <c-space size="xl" wrap>
    <c-statistic
      title="比例数字（右侧标记会跳动）"
      :value="count"
      suffix="|"
      :value-style="{ fontVariantNumeric: 'proportional-nums' }"
    />
    <c-statistic title="等宽数字（右侧标记保持稳定）" :value="count" suffix="|" tabular-nums />
  </c-space>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const values = [1111, 8888, 1010, 9090]
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
