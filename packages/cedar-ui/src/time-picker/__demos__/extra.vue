<template>
  <c-button @click="updateTime">update time</c-button>
  <br />
  历史
  <br />
  <c-time-picker ref="timePicker" timeMode="history" v-model="timeValue" style="width: 194px" @change="changeTime">
  </c-time-picker>
  <br />
  预约<br />
  <c-time-picker ref="timePicker" timeMode="appointment" v-model="timeValue" style="width: 194px" @change="changeTime">
  </c-time-picker>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    const timePicker = ref<any>()
    const timeValue = ref<string>('12:20:20')
    const timeStr = ref<string>()

    function updateTime(time: Date) {
      const current = new Date()
      const h = time.getHours()
      const m = time.getMinutes()
      const s = time.getSeconds()
      const ms = time.getMilliseconds()
      if (time.getTime() < current.getTime()) {
        current.setDate(current.getDate() - 1)
      }
      current.setHours(h)
      current.setMinutes(m)
      current.setSeconds(s)
      current.setMilliseconds(ms)
      timeStr.value = dayjs(time.getTime()).format('YYYY-MM-DD HH:mm:ss')
    }

    return {
      timePicker,
      timeValue,
      timeStr,
      updateTime: () => {
        timePicker.value.updateTime()
      },
      changeTime: (v, data, stamp) => {
        console.log(v, data, stamp)
      },
      // timeSelect: (v: string, time: Date) => {
      //   updateTime(time)
      //   console.log(',timeSelect', v, time)
      // },
    }
  },
})
</script>
