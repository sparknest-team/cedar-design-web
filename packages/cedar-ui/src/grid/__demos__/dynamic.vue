<script setup lang="ts">
import { ref } from 'vue'
const items = ref([1, 2, 3, 4, 5])
let next = 6
</script>
<template><div>
  <div class="controls"><c-button @click="items.unshift(next++)">Insert first</c-button><c-button :disabled="!items.length" @click="items.shift()">Remove first</c-button><c-button @click="items.reverse()">Reverse</c-button></div>
  <c-grid :cols="3" :col-gap="12" :row-gap="12" collapsed><c-grid-item v-for="i in items" :key="i" class="cell">{{ i }}</c-grid-item><c-grid-item suffix v-slot="{ overflow }" class="cell soft">{{ overflow ? '…' : 'End' }}</c-grid-item></c-grid>
</div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
