<script setup lang="ts">
import { ref } from 'vue'
const message = ref('Ready')
function sync() { message.value = 'Synchronous: no loading' }
async function run(fail = false) {
  message.value = 'Pending: duplicate clicks are blocked'
  await new Promise(resolve => setTimeout(resolve, 800))
  message.value = fail ? 'Rejected: loading released' : 'Resolved: loading released'
  if (fail) throw new Error('Demo rejection')
}
</script>
<template>
  <div style="display: flex; flex-wrap: wrap; gap: 12px">
    <c-button auto-loading @click="sync">Sync</c-button>
    <c-button auto-loading @click="() => run()">Resolve</c-button>
    <c-button auto-loading @click="() => run(true)">Reject</c-button>
  </div>
  <p aria-live="polite">{{ message }}</p>
</template>
