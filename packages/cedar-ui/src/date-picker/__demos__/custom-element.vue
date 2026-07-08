<template>
  <c-space>
    <c-date-picker style="width: 268px" v-model="value">
      <c-button>{{ value || '请选择日期' }}</c-button>
    </c-date-picker>
    <c-range-picker style="width: 268px" v-model="rangeValue">
      <c-button>{{ (rangeValue && rangeValue.join(' - ')) || '请选择日期范围' }}</c-button>
    </c-range-picker>
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
