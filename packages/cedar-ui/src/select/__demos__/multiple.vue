<template>
  <c-space direction="column" size="lg">
    <c-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      scrollbar
    >
      <c-option>Beijing</c-option>
      <c-option :tag-props="{ color: 'red' }">Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
    <c-select
      :default-value="['Beijing', 'Shanghai', 'Guangzhou']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      multiple
      :max-tag-count="2"
      clearable
      scrollbar
    >
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
