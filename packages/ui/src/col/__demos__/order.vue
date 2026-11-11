<script setup lang="ts">
import { ref } from 'vue'
const reverse = ref(false)
</script>
<template><div><div class="controls"><c-switch v-model="reverse" aria-label="Reverse order" />Reverse order</div><c-row :gutter="12"><c-col v-for="i in 3" :key="i" :span="8" :order="reverse ? 3 - i : 0"><div class="cell">{{ i }}</div></c-col></c-row></div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
