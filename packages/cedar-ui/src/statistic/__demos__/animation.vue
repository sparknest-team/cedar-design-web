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
        <IconArrowRise />
      </template>
      <template #suffix>%</template>
    </c-statistic>
    <c-button status="primary" @click="started = true">Start</c-button>
  </c-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconArrowRise } from '@cedarjs/icons-vue'

const started = ref(false)
</script>
