<template>
  <c-space direction="column">
    <c-checkbox :model-value="checkedAll" :indeterminate="indeterminate" @change="handleChangeAll">Check All </c-checkbox>
    <c-checkbox-group v-model="data" @change="handleChange">
      <c-checkbox value="1">Option 1</c-checkbox>
      <c-checkbox value="2">Option 2</c-checkbox>
      <c-checkbox value="3">Option 3</c-checkbox>
    </c-checkbox-group>
  </c-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const indeterminate = ref(false)
    const checkedAll = ref(false)
    const data = ref<string[]>([])

    const handleChangeAll = (value) => {
      indeterminate.value = false
      if (value) {
        checkedAll.value = true
        data.value = ['1', '2', '3']
      } else {
        checkedAll.value = false
        data.value = []
      }
    }

    const handleChange = (values) => {
      if (values.length === 3) {
        checkedAll.value = true
        indeterminate.value = false
      } else if (values.length === 0) {
        checkedAll.value = false
        indeterminate.value = false
      } else {
        checkedAll.value = false
        indeterminate.value = true
      }
    }

    return {
      indeterminate,
      checkedAll,
      data,
      handleChangeAll,
      handleChange,
    }
  },
})
</script>
