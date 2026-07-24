<template>
  <c-space direction="column">
    <c-count-to ref="countToRef" :to="123456" :auto-start="false" />
    <c-space>
      <c-button status="primary" @click="countToRef?.start()">开始</c-button>
      <c-button @click="countToRef?.pause()">暂停</c-button>
      <c-button @click="countToRef?.reset()">重置</c-button>
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CountToInstance } from '../index'

const countToRef = ref<CountToInstance>()
</script>
