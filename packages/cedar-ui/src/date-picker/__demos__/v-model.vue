<template>
  <c-space>
    <c-date-picker v-model="value" />
    <c-date-range-picker v-model="rangeValue" />
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
