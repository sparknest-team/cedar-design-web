<template>
  <c-space direction="column">
    <c-select v-model="value" :style="{ width: '240px' }" placeholder="Please select ..." clearable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>  
    </c-select>
    <c-select v-model="value" :style="{ width: '240px' }" disabled>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
    </c-select>
    <c-select v-model="value" :style="{ width: '240px' }" multiple clearable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Shanghai1</c-option>
      <c-option>Shanghai2</c-option>
      <c-option>Shanghai3</c-option>
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
