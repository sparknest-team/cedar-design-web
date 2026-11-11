<script setup lang="ts">
import { ref } from 'vue'
const containerRef = ref<HTMLElement>()
const fixed = ref(false)
</script>

<template>
  <p>Scroll inside the bordered area.</p>
  <div ref="containerRef" class="scroller">
    <div class="scroll-content">
      <div style="height: 40px"></div>
      <c-affix :target="containerRef" :offset-top="20" @change="fixed = $event"
        ><c-button status="primary">Change event</c-button></c-affix
      >
    </div>
  </div>
  <p role="status">Fixed: {{ fixed }}</p>
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
