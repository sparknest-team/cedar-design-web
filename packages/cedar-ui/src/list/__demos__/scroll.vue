<template>
  <div style="margin-bottom: 10px">
    <c-switch v-model="scrollbar" />
    Virtual Scrollbar
  </div>
  <c-list :max-height="240" @reach-bottom="fetchData" :scrollbar="scrollbar">
    <template #header> List title </template>
    <template #scroll-loading>
      <div v-if="bottom">No more data</div>
      <c-spin v-else />
    </template>
    <c-list-item v-for="item of data" :key="item">{{ item }}</c-list-item>
  </c-list>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const current = ref(1)
const bottom = ref(false)
const data = reactive([])
const scrollbar = ref(true)

const fetchData = () => {
  console.log('reach bottom!')
  if (current.value <= 5) {
    window.setTimeout(() => {
      const index = data.length
      data.push(
        `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
        `Bytedance Technology Co., Ltd. ${index + 2}`,
        `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
        `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
        `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`,
      )
      current.value += 1
    }, 2000)
  } else {
    bottom.value = true
  }
}
</script>
