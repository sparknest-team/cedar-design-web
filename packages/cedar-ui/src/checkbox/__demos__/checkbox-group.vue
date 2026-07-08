<template>
  <c-space direction="column" size="lg">
    <c-checkbox-group :default-value="['1']">
      <c-checkbox value="1">Option 1</c-checkbox>
      <c-checkbox value="2">Option 2</c-checkbox>
      <c-checkbox value="3">Option 3</c-checkbox>
    </c-checkbox-group>
    <c-checkbox-group direction="column">
      <c-checkbox value="1">Option 1</c-checkbox>
      <c-checkbox value="2">Option 2</c-checkbox>
      <c-checkbox value="3">Option 3</c-checkbox>
    </c-checkbox-group>
  </c-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
