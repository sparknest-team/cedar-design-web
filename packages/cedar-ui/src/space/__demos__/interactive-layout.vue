<script setup lang="ts">
import { ref } from 'vue'

const direction = ref<'row' | 'column'>('row')
const gap = ref(8)
const wrap = ref(false)
const count = ref(3)
</script>

<template>
  <div>
    <c-space wrap :size="8">
      <c-button @click="direction = direction === 'row' ? 'column' : 'row'">Toggle direction</c-button>
      <c-button @click="gap = gap === 8 ? 24 : 8">Toggle gap</c-button>
      <c-button @click="wrap = !wrap">Toggle wrap</c-button>
      <c-button :disabled="count >= 6" @click="count++">Add item</c-button>
      <c-button :disabled="count <= 1" @click="count--">Remove item</c-button>
    </c-space>
    <p aria-live="polite">{{ direction }} / gap {{ gap }} / wrap {{ wrap }} / items {{ count }}</p>
    <div style="max-width: 100%; overflow: auto">
      <c-space data-demo-layout :direction="direction" :size="[8, gap]" :wrap="wrap" style="width: 260px; max-width: 100%">
        <div v-for="item in count" :key="item" style="width: 72px; padding: 8px; box-sizing: border-box; border: 1px solid currentColor">Item {{ item }}</div>
      </c-space>
    </div>
  </div>
</template>
