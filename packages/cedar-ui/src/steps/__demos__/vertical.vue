<template>
  <div class="frame-bg">
    <div class="frame-body">
      <div class="frame-aside">
        <c-steps :current="current" direction="vertical">
          <c-step>Succeeded</c-step>
          <c-step>Processing</c-step>
          <c-step>Pending</c-step>
        </c-steps>
      </div>
      <div class="frame-main">
        <div class="main-content">The content of this step.</div>
        <div class="main-bottom">
          <c-button :disabled="current === 1" @click="onPrev">
            <c-icon-left />
            Back
          </c-button>
          <c-button :disabled="current === 3" @click="onNext">
            Next
            <c-icon-right />
          </c-button>
        </div>
      </div>
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

    return {
      current,
      onPrev,
      onNext,
    }
  },
}
</script>
