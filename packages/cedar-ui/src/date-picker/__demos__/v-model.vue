<template>
  <c-space>
    <c-date-picker v-model="value" style="width: 200px" />
    <c-range-picker v-model="rangeValue" style="width: 300px" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref(Date.now())
    const rangeValue = [Date.now(), Date.now()]
    return {
      value,
      rangeValue,
    }
  },
})
</script>
