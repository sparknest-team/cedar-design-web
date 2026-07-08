<template>
  <c-time-picker
    default-value="10:25:30"
    :step="{
      hour: 2,
      minute: 5,
      second: 10,
    }"
    style="width: 194px" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      defaultValue: '09:24',
    }
  },
})
</script>
