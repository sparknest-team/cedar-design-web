<template>
  <c-empty description="No data, please reload">
    <template #extra>
      <c-button type="primary" @click="handleReload">Reload</c-button>
    </template>
  </c-empty>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const handleReload = () => {
      console.log('reload')
    }
    return { handleReload }
  },
})
</script>
