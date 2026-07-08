<template>
  <c-space direction="column" size="lg">
    <c-select :style="{ width: '320px' }" placeholder="Please select ...">
      <c-optgroup label="Group-1">
        <c-option>Beijing</c-option>
        <c-option>Shanghai</c-option>
      </c-optgroup>
      <c-optgroup label="Group-2">
        <c-option>Guangzhou</c-option>
        <c-option disabled>Disabled</c-option>
        <c-option>Shenzhen</c-option>
      </c-optgroup>
      <c-optgroup label="Group-3">
        <c-option>Chengdu</c-option>
        <c-option>Wuhan</c-option>
      </c-optgroup>
    </c-select>
    <c-select :style="{ width: '320px' }" placeholder="Please select ..." multiple>
      <c-optgroup label="Group-1">
        <c-option>Beijing</c-option>
        <c-option>Shanghai</c-option>
      </c-optgroup>
      <c-optgroup label="Group-2">
        <c-option>Guangzhou</c-option>
        <c-option disabled>Disabled</c-option>
        <c-option>Shenzhen</c-option>
      </c-optgroup>
      <c-optgroup label="Group-3">
        <c-option>Chengdu</c-option>
        <c-option>Wuhan</c-option>
      </c-optgroup>
    </c-select>
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
