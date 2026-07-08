<template>
  <div>
    <c-steps changeable :current="current" @change="setCurrent">
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
        <c-button type="secondary" :disabled="current <= 1" @click="onPrev">
          <c-icon-left />
          Back
        </c-button>
        <c-button type="primary" :disabled="current >= 3" @click="onNext">
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
    const onPrev = () => {
      current.value = Math.max(1, current.value - 1)
    }
    const onNext = () => {
      current.value = Math.min(3, current.value + 1)
    }

    const setCurrent = (current) => {
      current.value = current
    }

    return {
      current,
      onPrev,
      onNext,
      setCurrent,
    }
  },
}
</script>
