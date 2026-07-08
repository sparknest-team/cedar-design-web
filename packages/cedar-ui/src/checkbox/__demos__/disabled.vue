<template>
  <c-space size="lg">
    <c-checkbox value="1" disabled>Disabled Option 1</c-checkbox>
    <c-checkbox :default-checked="true" disabled>Disabled Option 2</c-checkbox>
  </c-space>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  })
</script>
