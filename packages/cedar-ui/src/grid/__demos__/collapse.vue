<script setup lang="ts">
import { ref } from 'vue'
const collapsed = ref(true)
const rows = ref(1)
</script>
<template><div>
  <div class="controls"><c-switch v-model="collapsed" aria-label="Collapsed" />Collapsed<c-radio-group v-model="rows"><c-radio :value="1">1 row</c-radio><c-radio :value="2">2 rows</c-radio></c-radio-group></div>
  <c-grid :cols="4" :col-gap="12" :row-gap="12" :collapsed="collapsed" :collapsed-rows="rows">
    <c-grid-item v-for="i in 9" :key="i" class="cell">{{ i }}</c-grid-item>
    <c-grid-item suffix v-slot="{ overflow }"><c-button block variant="outline" @click="collapsed = !collapsed">{{ overflow ? 'More' : 'Less' }}</c-button></c-grid-item>
  </c-grid>
</div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
