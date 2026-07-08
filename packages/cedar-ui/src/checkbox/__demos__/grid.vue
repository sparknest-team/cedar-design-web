<template>
  <c-checkbox-group v-model="checkedValue">
    <c-grid :cols="3" :colGap="24" :rowGap="16">
      <c-grid-item>
        <c-checkbox value="1">Option 1</c-checkbox>
      </c-grid-item>
      <c-grid-item>
        <c-checkbox value="2" disabled>Option 2</c-checkbox>
      </c-grid-item>
      <c-grid-item>
        <c-checkbox value="3">Option 3</c-checkbox>
      </c-grid-item>
      <c-grid-item>
        <c-checkbox value="4">Option 4</c-checkbox>
      </c-grid-item>
      <c-grid-item>
        <c-checkbox value="5">Option 5</c-checkbox>
      </c-grid-item>
    </c-grid>
  </c-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checkedValue = ref(['1', '2'])

    return {
      checkedValue,
    }
  },
})
</script>
