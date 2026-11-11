<template>
  <c-space direction="column">
    <c-select v-model="value" :style="{ width: '240px' }" placeholder="Please select ..." aria-label="基础单选示例" clearable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
    </c-select>
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('Shanghai')
    return {
      value,
    }
  },
})
</script>
