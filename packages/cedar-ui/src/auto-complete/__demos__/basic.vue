<template>
  <c-auto-complete :options="options" placeholder="请输入" @search="handleSearch" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref<any>([])
    return {
      options,
      handleSearch(value: string) {
        if (value) {
          options.value = [...Array(5)].map((_, index) => `${value}-${index}`)
          console.log(options)
        } else {
          options.value = []
        }
      },
    }
  },
})
</script>
