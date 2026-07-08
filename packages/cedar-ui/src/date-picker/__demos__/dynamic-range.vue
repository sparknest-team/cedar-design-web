<template>
  <c-range-picker
    style="width: 300px"
    @select="onSelect"
    @popupVisibleChange="onPopupVisibleChange"
    :disabledDate="disabledDate" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
export default defineComponent({
  setup() {
    const dateArr = ref<any[]>([])
    return {
      dayjs,
      onSelect(valueString, value) {
        dateArr.value = value
      },
      onPopupVisibleChange(visible) {
        if (!visible) {
          dateArr.value = []
        }
      },
      disabledDate(current: number) {
        const dates = dateArr.value
        if (dates && dates.length) {
          const tooLate = dates[0] && Math.abs((new Date(current).getTime() - dates[0]) / (24 * 60 * 60 * 1000)) > 7
          const tooEarly = dates[1] && Math.abs((new Date(current).getTime() - dates[1]) / (24 * 60 * 60 * 1000)) > 7
          return tooEarly || tooLate
        }
        return false
      },
    }
  },
})
</script>
