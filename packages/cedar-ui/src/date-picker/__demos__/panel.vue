<template>
  <div>
    <c-date-picker default-value="2019-06-03" v-model:pickerValue="pickerValue" hide-trigger style="width: 268px" />
    <a-range-picker
      :default-value="['2019-08-01', '2020-06-01']"
      v-model:pickerValue="rangePickerValue"
      hide-trigger
      style="width: 560px; margin-top: 20px"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import dayjs from 'dayjs'
export default defineComponent({
  setup() {
    const pickerValue = ref()
    const rangePickerValue = ref()
    return {
      pickerValue,
      rangePickerValue,
    }
  },
})
</script>
