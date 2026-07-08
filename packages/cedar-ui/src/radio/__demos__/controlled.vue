<template>
  <c-space size="lg">
    <c-radio v-model="checked1">v-model</c-radio>
    <c-radio :model-value="true">binding "true"</c-radio>
    <c-radio :model-value="checked2">binding value2</c-radio>
    <c-radio :default-checked="true">uncontrolled state</c-radio>
  </c-space>
  <div :style="{ marginTop: '20px' }">
    <c-space size="lg">
      <c-button type="primary" @click="handleSetCheck"> {{ checked2 ? 'uncheck' : 'check' }} value2 </c-button>
      <c-button @click="handleReset"> reset all</c-button>
    </c-space>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(false)

    const handleSetCheck = () => {
      checked2.value = !checked2.value
    }

    const handleReset = () => {
      checked1.value = false
      checked2.value = false
    }

    return {
      checked1,
      checked2,
      handleSetCheck,
      handleReset,
    }
  },
}
</script>
