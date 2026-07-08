<template>
  <c-radio-group v-model="checkedValue">
    <c-grid :cols="3" :colGap="24" :rowGap="16">
      <c-grid-item>
        <c-radio value="1">Option 1</c-radio>
      </c-grid-item>
      <c-grid-item>
        <c-radio value="2" disabled>Option 2</c-radio>
      </c-grid-item>
      <c-grid-item>
        <c-radio value="3">Option 3</c-radio>
      </c-grid-item>
      <c-grid-item>
        <c-radio value="4">Option 4</c-radio>
      </c-grid-item>
      <c-grid-item>
        <c-radio value="5">Option 5</c-radio>
      </c-grid-item>
    </c-grid>
  </c-radio-group>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const checkedValue = ref('1')

    return {
      checkedValue,
    }
  },
}
</script>
