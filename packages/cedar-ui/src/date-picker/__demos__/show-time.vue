<template>
  <c-date-picker
    style="width: 220px; margin: 0 24px 24px 0"
    show-time
    :time-picker-props="{ defaultValue: '09:09:06' }"
    format="YYYY-MM-DD HH:mm:ss"
    @change="onChange"
    @select="onSelect"
    @ok="onOk" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    function onSelect(dateString: any, date: any) {
      console.log('onSelect', dateString, date)
    }

    function onChange(dateString: any, date: any) {
      console.log('onChange: ', dateString, date)
    }

    function onOk(dateString: any, date: any) {
      console.log('onOk: ', dateString, date)
    }
    return {
      onSelect,
      onChange,
      onOk,
    }
  },
})
</script>
