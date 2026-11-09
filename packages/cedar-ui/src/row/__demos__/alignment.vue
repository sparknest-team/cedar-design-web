<script setup lang="ts">
import { ref } from 'vue'
const justifies = ['start', 'center', 'end', 'space-around', 'space-between'] as const
const aligns = ['start', 'center', 'end', 'stretch'] as const
const justify = ref<typeof justifies[number]>('space-between')
const align = ref<typeof aligns[number]>('center')
</script>
<template><div class="row-demo">
  <c-radio-group v-model="justify"><c-radio v-for="value in justifies" :key="value" :value="value">{{ value }}</c-radio></c-radio-group>
  <c-radio-group v-model="align"><c-radio v-for="value in aligns" :key="value" :value="value">{{ value }}</c-radio></c-radio-group>
  <c-row :justify="justify" :align="align"><c-col v-for="i in 3" :key="i" :span="6"><div class="cell" :style="{ minHeight: `${36 + i * 24}px`, height: '100%' }">{{ i }}</div></c-col></c-row>
</div></template>

<style scoped>
.row-demo { display: flex; flex-direction: column; gap: 16px; }
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
