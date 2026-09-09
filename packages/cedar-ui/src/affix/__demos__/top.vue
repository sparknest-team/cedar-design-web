<script setup lang="ts">
import { ref } from 'vue'
const containerRef = ref<HTMLElement>()
</script>

<template>
  <p>Scroll inside the bordered area.</p>
  <div ref="containerRef" class="scroller">
    <div class="scroll-content">
      <c-affix :target="containerRef" :offset-top="80"
        ><c-button status="primary">Top offset</c-button></c-affix
      >
    </div>
  </div>
</template>

<style scoped>
.scroller {
  height: 200px;
  overflow: auto;
  border: 1px solid currentColor;
}
.scroll-content {
  min-height: 600px;
  padding: 16px;
}
</style>
