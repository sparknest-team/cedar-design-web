<template>
  <c-space size="lg">
    <c-checkbox v-model="checked1">v-model</c-checkbox>
    <c-checkbox :model-value="true">binding value</c-checkbox>
    <c-checkbox :model-value="checked2">binding value2</c-checkbox>
    <c-checkbox :default-checked="true">uncontrolled state</c-checkbox>
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <a-button type="primary" @click="handleSetCheck"> {{ checked2 ? 'uncheck' : 'check' }} value2 </a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)

    const handleSetCheck = () => {
      checked2.value = !checked2.value
    }

    return {
      checked1,
      checked2,
      handleSetCheck,
    }
  },
})
</script>
