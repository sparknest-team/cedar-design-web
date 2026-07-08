<template>
  <c-auto-complete :options="options" placeholder="请输入" strict @search="handleSearch" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref<any>(['Beijing', 'Shanghai', 'Chengdu', 'WuHan'])
    return {
      options,
      handleSearch(value: string) {
        console.log('handleSearch---value', value)
      },
    }
  },
})
</script>
