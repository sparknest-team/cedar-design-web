<template>
  <c-space>
    <c-select :default-value="'Beijing'" :style="{ width: '360px' }" placeholder="Please select ..." filterable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Wuhan</c-option>
      <template #footer>
        <div style="padding: 6px 0; text-align: center">
          <c-button>Click Me</c-button>
        </div>
      </template>
    </c-select>
    <c-select
      :default-value="'Beijing'"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      filterable
      show-footer-on-empty
    >
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Wuhan</c-option>
      <template #footer>
        <div style="padding: 6px 0; text-align: center">
          <c-button>Click Me</c-button>
        </div>
      </template>
    </c-select>
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  })
</script>
