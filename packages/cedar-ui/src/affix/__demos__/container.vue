<template>
  <div ref="containerRef" style="height: 200px; overflow: auto">
    <div style="height: 400px; background: #cccccc; overflow: hidden">
      <c-affix :offsetTop="20" :target="containerRef" style="margin: 40px">
        <c-button type="primary">Affix in scrolling container</c-button>
      </c-affix>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const containerRef = ref()
</script>
