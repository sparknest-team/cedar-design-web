<template>
  <c-space direction="column" size="lg">
    <c-checkbox-group :max="2" v-model="value1" :options="plainOptions" />
    <c-checkbox-group :max="2" :default-value="['1']">
      <c-checkbox value="1" disabled>Option 1</c-checkbox>
      <c-checkbox value="2">Option 2</c-checkbox>
      <c-checkbox value="3">Option 3</c-checkbox>
      <c-checkbox value="4">Option 4</c-checkbox>
    </c-checkbox-group>
  </c-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const value1 = ref(['Plain 1'])
    const plainOptions = ['Plain 1', 'Plain 2', 'Plain 3', 'Plain 4']

    return {
      plainOptions,
      value1,
    }
  },
})
</script>
