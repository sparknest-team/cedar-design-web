<template>
  <div>
    <c-radio-group v-model="currentStatus" variant="button" style="margin-bottom: 16px">
      <c-radio v-for="status in statuses" :key="status" :value="status">{{ status }}</c-radio>
    </c-radio-group>
    <c-steps changeable :model-value="current" :status="currentStatus" @change="setCurrent">
      <c-step description="This is a description">Succeeded</c-step>
      <c-step description="This is a description">Processing</c-step>
      <c-step description="This is a description">Pending</c-step>
    </c-steps>
    <div
      :style="{
        width: '100%',
        height: '200px',
        textAlign: 'center',
        background: 'var(--color-bg-2)',
        color: '#C2C7CC',
      }"
    >
      <div style="line-height: 160px">Step{{ current }} Content</div>
      <c-space size="lg">
        <c-button status="secondary" :disabled="current <= 1" @click="onPrev">
          <c-icon-left />
          Back
        </c-button>
        <c-button status="primary" :disabled="current >= 3" @click="onNext">
          Next
          <c-icon-right />
        </c-button>
      </c-space>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const current = ref(1)
    const statuses = ['wait', 'process', 'finish', 'error'] as const
    const currentStatus = ref<(typeof statuses)[number]>('process')
    const onPrev = () => {
      current.value = Math.max(1, current.value - 1)
    }
    const onNext = () => {
      current.value = Math.min(3, current.value + 1)
    }

    const setCurrent = (step: number) => {
      current.value = step
    }

    return {
      current,
      statuses,
      currentStatus,
      onPrev,
      onNext,
      setCurrent,
    }
  },
}
</script>
