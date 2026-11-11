<template><div class="row-demo">
  <c-row><c-col :span="12"><div class="cell">12</div></c-col><c-col :span="12"><div class="cell soft">12</div></c-col></c-row>
  <c-row><c-col v-for="i in 3" :key="i" :span="8"><div class="cell">8</div></c-col></c-row>
</div></template>

<style scoped>
.row-demo { display: flex; flex-direction: column; gap: 16px; }
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
