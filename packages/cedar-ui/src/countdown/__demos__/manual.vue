<template>
  <c-space direction="column" align="flex-start">
    <c-countdown
      ref="countdownRef"
      :time="5000"
      :auto-start="false"
      format="ss.SSS"
      @end="handleEnd"
    />
    <c-space>
      <c-button status="primary" @click="countdownRef?.start()">开始</c-button>
      <c-button @click="countdownRef?.pause()">暂停</c-button>
      <c-button @click="countdownRef?.reset()">重置</c-button>
    </c-space>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Message } from '@cedarjs/ui'
import type { CountdownInstance } from '../index'

const countdownRef = ref<CountdownInstance>()

const handleEnd = () => {
  Message.info('end!')
}
</script>
