<script setup lang="ts">
import { ref } from 'vue'
const result = ref('Ready')
const wait = () => new Promise<void>((resolve) => setTimeout(resolve, 500))
async function allow() {
  await wait()
  result.value = 'Allowed'
  return true
}
async function deny() {
  await wait()
  result.value = 'Blocked'
  return false
}
async function reject() {
  await wait()
  result.value = 'Rejected'
  throw new Error('Demo rejection')
}
</script>

<template>
  <c-space direction="column">
    <label>Allow after 500ms <c-switch :before-change="allow" aria-label="Async allow" /></label>
    <label>Return false <c-switch :before-change="deny" aria-label="Async deny" /></label>
    <label>Reject Promise <c-switch :before-change="reject" aria-label="Async rejection" /></label>
    <output aria-live="polite">{{ result }}</output>
  </c-space>
</template>
