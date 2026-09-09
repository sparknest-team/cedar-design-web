<script setup lang="ts">
import { ref } from 'vue'
const containerRef = ref<HTMLElement>()
</script>

<template>
  <p>Scroll inside the bordered area.</p>
  <div ref="containerRef" class="scroller">
    <div class="scroll-content">
      <div style="height: 240px"></div>
      <c-affix :target="containerRef" :offset-bottom="20"
        ><c-button status="primary">Bottom offset</c-button></c-affix
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
