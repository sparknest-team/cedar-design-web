<script setup lang="ts">
import { ref } from 'vue'
const gap = ref(16)
const vertical = ref(true)
</script>
<template><div>
  <div class="controls"><c-radio-group v-model="gap"><c-radio v-for="value in [0, 8, 16, 24]" :key="value" :value="value">{{ value }}px</c-radio></c-radio-group><c-switch v-model="vertical" aria-label="Vertical gutter" />Vertical gap</div>
  <c-row :gutter="[gap, vertical ? gap : 0]"><c-col v-for="i in 6" :key="i" :span="8"><div class="cell">{{ i }}</div></c-col></c-row>
  <c-row :gutter="[{ xs: 8, md: 24 }, { xs: 8, md: 16 }]"><c-col v-for="i in 4" :key="i" :span="12"><div class="cell soft">Responsive gap</div></c-col></c-row>
</div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
