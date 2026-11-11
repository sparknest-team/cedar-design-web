<template>
  <c-date-picker style="margin: 0 24px 24px 0"
    :disabled-date="(current: any) => dayjs(current).isBefore(dayjs())"
  />
  <c-date-picker style="margin-right: 24px; margin-bottom: 24px"
    show-time
    :disabled-date="(current: any) => dayjs(current).isBefore(dayjs())"
    :disabled-time="getDisabledTime"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    function range(start: any, end: any) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    }

    function getDisabledTime(date: any) {
      return {
        disabledHours: () => range(6, 24),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => range(30, 60),
      }
    }
    return {
      dayjs,
      getDisabledTime,
    }
  },
})
</script>
