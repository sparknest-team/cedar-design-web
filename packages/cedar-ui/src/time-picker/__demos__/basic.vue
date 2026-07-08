<template>
  <c-space>
    <c-time-picker v-model:model-value="value1_" style="width: 252px" @select="select" @change="change" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1_ = ref<number>(new Date().getTime())
    const value2_ = ref<string>('01:01:01')
    const value3_ = ref<Date>(new Date())

    return {
      value1_,
      value2_,
      value3_,
      select: (valueString: any, time: any) => {
        console.log('value1_', value1_)
        console.log('value2_', value2_)
        console.log('value3_', value3_)
        // console.log(valueString, time)
      },
      change: (value: any, valueString: any, time: any) => {
        console.log('value1_', value1_)
        console.log('value2_', value2_)
        console.log('value3_', value3_)
        // console.log(valueString, time, value)
      },
    }
  },
})
</script>
