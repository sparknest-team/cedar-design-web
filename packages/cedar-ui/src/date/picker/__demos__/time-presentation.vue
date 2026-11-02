<script setup lang="ts">
import { ref } from 'vue'

const use12Hours = ref(true)
const timeOptions = { step: { minute: 15 }, hideDisabledOptions: true }
</script>

<template>
  <c-checkbox v-model="use12Hours">十二小时展示</c-checkbox>

  <c-date-picker
    model-value="2025-01-05 13:30"
    show-time
    format="YYYY-MM-DD HH:mm"
    value-format="YYYY-MM-DD HH:mm"
    :time-picker-props="{ ...timeOptions, use12Hours }"
  />
</template>
