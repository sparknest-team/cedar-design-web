<template>
  <c-space>
    <c-date-picker v-model="value" :hide-trigger="false">
      <c-button>{{ value || '请选择日期' }}</c-button>
    </c-date-picker>
    <c-date-range-picker v-model="rangeValue" :hide-trigger="false">
      <c-button>{{ (rangeValue && rangeValue.join(' - ')) || '请选择日期范围' }}</c-button>
    </c-date-range-picker>
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref()
    const rangeValue = ref()
    return {
      value,
      rangeValue,
    }
  },
})
</script>
