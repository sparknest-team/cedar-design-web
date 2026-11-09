<template>
  <c-space size="xl" align="flex-end" wrap>
    <c-statistic
      title="Growth Rate"
      :value="50.52"
      :precision="2"
      :value-from="0"
      :start="started"
      animation
    >
      <template #prefix>
        <c-icon-arrow-rise />
      </template>
      <template #suffix>%</template>
    </c-statistic>
    <c-button status="primary" @click="started = true">Start</c-button>
  </c-space>

  <c-space direction="column" style="margin-top: 16px">
    <h4>动态开关与配置 / Dynamic animation</h4>
    <c-statistic title="动态目标 / Dynamic target" :value="100" :animation="enabled" :value-from="origin" :animation-duration="duration" />
    <c-space wrap>
      <c-button @click="enabled = !enabled">{{ enabled ? '关闭动画 / Disable animation' : '启用动画 / Enable animation' }}</c-button>
      <c-button @click="origin = origin === 0 ? 20 : 0">切换起点 / Change origin</c-button>
      <c-button @click="duration = duration === 800 ? 1600 : 800">切换时长 / Change duration</c-button>
    </c-space>
    <p>起点 / From: {{ origin }}；时长 / Duration: {{ duration }}ms</p>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconArrowRise as CIconArrowRise } from '@cedar-design/icons-vue'

const started = ref(false)
const enabled = ref(false)
const origin = ref(0)
const duration = ref(800)
</script>
