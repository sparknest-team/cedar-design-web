<template><div><c-row :gutter="24"><c-col :span="16"><c-row :gutter="8"><c-col :span="12"><div class="cell">Inner 12</div></c-col><c-col :span="12"><div class="cell soft">Inner 12</div></c-col></c-row></c-col><c-col :span="8"><div class="cell">Outer 8</div></c-col></c-row></div></template>

<style scoped>
.controls { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.cell { box-sizing: border-box; padding: 12px; min-width: 0; border-radius: 4px; background: var(--c-color-primary); color: var(--c-color-white); text-align: center; overflow-wrap: anywhere; }
.soft { opacity: .7; }
</style>
