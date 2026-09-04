<template>
  <div>
    <div style="margin-bottom: 20px">
      <c-radio-group v-model="size" type="button">
        <c-radio value="xs">xs</c-radio>
        <c-radio value="sm">sm</c-radio>
        <c-radio value="md">md</c-radio>
        <c-radio value="lg">lg</c-radio>
        <c-radio value="xl">xl</c-radio>
      </c-radio-group>
    </div>
    <c-space :size="size">
      <c-button status="primary">Item1</c-button>
      <c-button status="primary">Item2</c-button>
      <c-button status="primary">Item3</c-button>
    </c-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const size = ref('md')

    return {
      size,
    }
  },
})
</script>
