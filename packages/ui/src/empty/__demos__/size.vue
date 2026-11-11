<template>
  <c-space direction="column">
    <c-empty v-for="size in sizes" :key="size" :image-size="size" :description="`image-size: ${size}`" />
  </c-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
    return { sizes }
  },
})
</script>
