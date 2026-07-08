<template>
  <c-date-picker
    style="width: 194px; margin: 0 24px 24px 0"
    :shortcuts="[
      {
        label: '2 hours later',
        value: () => dayjs().add(2, 'hour'),
      },
      {
        label: 'a week later',
        value: () => dayjs().add(1, 'week'),
      },
      {
        label: 'a month later',
        value: () => dayjs().add(1, 'month'),
      },
    ]"
    show-time
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    return {
      dayjs,
    }
  },
})
</script>
