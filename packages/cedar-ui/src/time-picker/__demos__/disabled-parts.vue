<template>
  <c-time-picker
    style="width: 194px; margin: 0 24px 24px 0"
    :disabled-hours="() => [1, 2, 4, 14]"
    :disabled-minutes="() => [1, 2, 3, 4, 14, 15, 16, 20, 50]"
    :disabled-seconds="() => [1, 2, 3, 4, 5, 6, 7, 10, 14, 60]"
  />
  <c-time-picker
    type="time-range"
    style="width: 252px; margin: 0 24px 24px 0"
    :disabled-hours="() => [1, 2, 4, 14]"
    :disabled-minutes="() => [1, 2, 3, 4, 14, 15, 16, 20, 50]"
    :disabled-seconds="() => [1, 2, 3, 4, 5, 6, 7, 10, 14, 60]"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
