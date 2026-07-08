<template>
  <c-range-picker @change="onChange" @select="onSelect" style="width: 254px; margin-bottom: 20px" />
  <br />
  <c-range-picker mode="week" @change="onChange" @select="onSelect" style="width: 254px; margin-bottom: 20px" />
  <br />
  <c-range-picker mode="month" @change="onChange" @select="onSelect" style="width: 254px; margin-bottom: 20px" />
  <br />
  <c-range-picker mode="year" @change="onChange" @select="onSelect" style="width: 254px; margin-bottom: 20px" />
  <br />
  <c-range-picker mode="quarter" @change="onChange" @select="onSelect" style="width: 254px; margin-bottom: 20px" />
  <br />
  <c-range-picker
    showTime
    :time-picker-props="{
      defaultValue: ['00:00:00', '00:00:00'],
    }"
    @change="onChange"
    @select="onSelect"
    style="width: 380px" />
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
