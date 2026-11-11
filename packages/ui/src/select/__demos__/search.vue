<template>
  <c-space direction="column" size="lg">
    <div>Show selections after search options</div>
    <c-select
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      :filter-option="false"
      @search="handleSearch"
    >
      <c-option v-for="item of options" :key="item" :value="item">{{ item }}</c-option>
    </c-select>
    <div>Hide selections after search options</div>
    <c-select
      :options="options"
      :style="{ width: '320px' }"
      :loading="loading"
      placeholder="Please select ..."
      multiple
      :filter-option="false"
      :show-extr-options="false"
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
