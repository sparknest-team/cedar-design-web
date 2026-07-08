<template>
  <c-space direction="column" size="lg">
    <c-select :style="{ width: '320px' }" placeholder="Please select ..." filterable>
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Chengdu</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
    <c-select :style="{ width: '320px' }" placeholder="Please select ..." :filterable="{ retainInputValue: true }">
      <c-option>Beijing</c-option>
      <c-option>Shanghai</c-option>
      <c-option>Guangzhou</c-option>
      <c-option disabled>Disabled</c-option>
      <c-option>Shenzhen</c-option>
      <c-option>Chengdu</c-option>
      <c-option>Wuhan</c-option>
    </c-select>
    <c-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      @search="handleSearch" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const options = ref(['Option1', 'Option2', 'Option3'])
    const loading = ref(false)

    const handleSearch = (value: any) => {
      if (value) {
        loading.value = true
        window.setTimeout(() => {
          options.value = [`${value}-Option1`, `${value}-Option2`, `${value}-Option3`]
          loading.value = false
        }, 2000)
      } else {
        options.value = []
      }
    }

    return {
      options,
      loading,
      handleSearch,
    }
  },
})
</script>
