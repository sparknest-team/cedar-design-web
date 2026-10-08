<template>
  <c-date-range-picker @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="week" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="month" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="year" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker type="quarter" @change="onChange" @select="onSelect" style="margin-bottom: 20px" />
  <br />
  <c-date-range-picker
    showTime
    :time-picker-props="{
      defaultValue: ['00:00:00', '00:00:00'],
    }"
    @change="onChange"
    @select="onSelect" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      onSelect(dateString, date) {
        console.log('onSelect', dateString, date)
      },
      onChange(dateString, date) {
        console.log('onChange: ', dateString, date)
      },
    }
  },
})
</script>
