<template>
  <c-space direction="column">
    <c-input
      v-model="value"
      clearable
      placeholder="输入后失焦，或按 Enter 提交"
      @input="lastEvent = 'input：' + $event"
      @change="lastEvent = 'change：' + $event"
      @press-enter="lastEvent = 'press-enter'"
      @clear="lastEvent = 'clear'"
    />
    <span class="interaction-demo__event">最近一次事件：{{ lastEvent }}</span>
  </c-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const lastEvent = ref('—')
</script>

<style scoped>
.interaction-demo__event {
  color: var(--color-text-2);
  font-size: 13px;
}
</style>
