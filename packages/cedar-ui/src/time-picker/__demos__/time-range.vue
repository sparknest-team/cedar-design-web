<template>
  <c-time-picker
    type="time-range"
    style="width: 252px"
    @select="(valueString, value) => print('onSelect:', valueString, value)"
    @change="(valueString, value) => print('onChange:', valueString, value)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      print: (valueString: any, value: any) => {
        console.log(valueString, value)
      },
    }
  },
})
</script>
