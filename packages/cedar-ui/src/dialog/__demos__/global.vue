<template>
  <c-button @click="globalOpen">Global Open</c-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const globalOpen = () => {
      Dialog.warning({
        title: '全局方法',
        message: '内容',
      })
    }

    return {
      globalOpen,
    }
  },
})
</script>
