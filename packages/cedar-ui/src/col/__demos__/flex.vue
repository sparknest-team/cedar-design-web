<template><div>
  <c-row :gutter="12"><c-col :flex="1"><div class="cell">1</div></c-col><c-col :flex="2"><div class="cell soft">2</div></c-col></c-row>
  <c-row :gutter="12" :wrap="false"><c-col flex="100px"><div class="cell">100px</div></c-col><c-col flex="auto"><div class="cell soft">auto</div></c-col></c-row>
</div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
