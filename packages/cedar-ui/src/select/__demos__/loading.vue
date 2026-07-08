<template>
  <c-select :style="{ width: '320px' }" placeholder="Please select ..." loading>
    <c-option>Beijing</c-option>
    <c-option>Shanghai</c-option>
    <c-option>Guangzhou</c-option>
    <c-option disabled>Disabled</c-option>
  </c-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
