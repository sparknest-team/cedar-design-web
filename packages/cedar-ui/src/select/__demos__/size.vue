<template>
  <c-space direction="column" size="lg">
    <c-radio-group v-model="size">
      <c-radio value="sm">sm</c-radio>
      <c-radio value="md">md</c-radio>
      <c-radio value="lg">lg</c-radio>
    </c-radio-group>
    <c-select
      :default-value="['Beijing', 'Shanghai']"
      :style="{ width: '360px' }"
      placeholder="Please select ..."
      :size="size"
    >
      <c-option>Beijing</c-option>
      <c-option :tag-props="{ color: 'red' }">Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
  </c-space>
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
