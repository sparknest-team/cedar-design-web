<template>
  <c-space>
    <c-link loading>加载中</c-link>
    <c-link :loading="loading1" @click="handleClick1">手动加载</c-link>
    <c-link :loading="loading2" @click="handleClick2">
      <template #icon>
        <icon-edit />
      </template>
      <!---->加载图形Link
    </c-link>
  </c-space>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const loading1 = ref(false)
    const loading2 = ref(false)

    const handleClick1 = () => {
      loading1.value = true
      setTimeout(() => {
        loading1.value = false
      }, 3000)
    }
    const handleClick2 = () => {
      loading2.value = true
      setTimeout(() => {
        loading2.value = false
      }, 3000)
    }

    return {
      loading1,
      loading2,
      handleClick1,
      handleClick2,
    }
  },
}
</script>
