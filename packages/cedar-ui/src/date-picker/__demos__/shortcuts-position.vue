<template>
  <c-date-picker style="margin: 0 24px 24px 0" shortcuts-position="left" :shortcuts="shortcuts" />
  <c-date-picker style="margin: 0 24px 24px 0" shortcuts-position="right" :shortcuts="shortcuts" />
  <c-date-picker style="margin: 0 24px 24px 0" shortcuts-position="bottom" :shortcuts="shortcuts" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    const shortcuts = [
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
    ]
    return {
      dayjs,
      shortcuts,
    }
  },
})
</script>
