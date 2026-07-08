<template>
  <c-select :default-value="'Beijing'" :style="{ width: '360px' }" placeholder="Please select ..." multiple>
    <c-option>Beijing</c-option>
    <c-option>Shanghai</c-option>
    <c-option>Guangzhou</c-option>
    <c-option disabled>Disabled</c-option>
    <c-option>Shenzhen</c-option>
    <c-option>Wuhan</c-option>
    <template #header>
      <div style="padding: 6px 12px">
        <c-checkbox value="1">全选</c-checkbox>
      </div>
    </template>
  </c-select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
