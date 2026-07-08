<template>
  <c-auto-complete :options="options" placeholder="请输入" @search="handleSearch">
    <template #footer>
      <div style="padding: 6px 0; text-align: center">
        <c-button>Click Me</c-button>
      </div>
    </template>
  </c-auto-complete>
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
