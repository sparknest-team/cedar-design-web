<template>
  <c-space wrap>
    <c-segmented disabled :options="['A', 'B', 'C']" default-value="A" />
    <c-segmented
      v-model="value"
      :options="[
        { label: '可用', value: 'on' },
        { label: '禁用', value: 'off', disabled: true },
      ]"
    />
  </c-space>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('on')
</script>
