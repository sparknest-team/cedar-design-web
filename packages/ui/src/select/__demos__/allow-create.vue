<template>
  <c-space direction="column" size="lg">
    <c-select :style="{ width: '320px' }" placeholder="Please select ..." creatable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Chengdu</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
    <c-select :style="{ width: '320px' }" placeholder="Please select ..." multiple creatable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Chengdu</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
