<script setup lang="ts">
import { ref } from 'vue'
const offset = ref(0)
const dot = ref(false)
const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'left', 'right'] as const
const inlinePositions = ['start', 'end'] as const
</script>

<template>
  <c-space direction="column" :size="24">
    <c-space wrap
      ><c-button @click="offset++">Offset +1</c-button><c-button @click="offset--">Offset -1</c-button
      ><c-button @click="offset = 0">Reset</c-button><c-switch v-model="dot" aria-label="Toggle dot"
    /></c-space>
    <output aria-live="polite">Offset: {{ offset }}px</output>
    <c-space wrap :size="32"
      ><c-badge
        v-for="position in positions"
        :key="position"
        :position="position"
        :content="100"
        :dot="dot"
        :offset-x="offset"
        :offset-y="offset"
        ><span style="display: inline-block; padding: 12px; border: 1px solid currentColor">{{
          position
        }}</span></c-badge
      ></c-space
    >
    <c-space wrap :size="24"
      ><c-badge
        v-for="position in inlinePositions"
        :key="position"
        mode="inline"
        :inline-position="position"
        :content="9"
        :dot="dot"
        :offset-y="offset"
        :description="position"
    /></c-space>
  </c-space>
</template>
