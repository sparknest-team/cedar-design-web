<template>
  <c-space direction="column">
    <c-count-to ref="counter" :from="0" :to="100" :duration="duration" @end="ends++" />
    <c-space>
      <c-button @click="duration = duration === 0 ? 600 : 0">切换时长 / Toggle duration</c-button>
      <c-button @click="counter?.reset()">重新播放 / Replay</c-button>
    </c-space>
    <p role="status">Duration: {{ duration }}ms; end: {{ ends }}. 0 时长在下一帧完成，不占用持续动画帧。</p>
  </c-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { CountToInstance } from '@cedar-design/ui'
const counter = ref<CountToInstance>()
const duration = ref(0)
const ends = ref(0)
</script>
