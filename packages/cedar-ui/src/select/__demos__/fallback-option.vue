<template>
  <c-space direction="column" size="lg">
    <c-select
      default-value="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback"
    >
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
    </c-select>
    <c-select
      default-value="Shanxi"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      :fallback-option="fallback"
      :show-extr-options="false"
    >
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
    </c-select>
    <c-select
      :default-value="['Shanxi', 'Nanjing', 'Hangzhou']"
      :style="{ width: '320px' }"
      placeholder="Please select ..."
      multiple
      :fallback-option="fallback"
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
    const fallback = (value: any) => {
      return {
        value,
        label: `++${value}++`,
      }
    }
    return {
      fallback,
    }
  },
})
</script>
