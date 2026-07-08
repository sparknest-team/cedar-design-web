<template>
  <c-select v-model:modelValue="value" :style="{ width: '320px' }" placeholder="Please select ...">
    <template #label="{ data }">
      <span> <c-icon-plus />{{ data?.label }}</span>
    </template>
    <c-option>Beijing</c-option>
    <c-option>Shanghai</c-option>
    <c-option>Guangzhou</c-option>
    <c-option disabled>Disabled</c-option>
  </c-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value = ref('Beijing')
    return { value }
  },
})
</script>
