<template>
  <p>soft分割线</p>
  <c-divider color="var(--c-color-outline-soft)"></c-divider>
  <p>默认</p>
  <c-divider></c-divider>
  <p>medium分割线</p>
  <c-divider color="var(--c-color-outline-medium)"></c-divider>
  <p>strong分割线</p>
  <c-divider color="var(--c-color-outline-strong)"></c-divider>
  <p>在灰色背景上的分割线</p>
  <div class="divider-demo-gray">
    <c-divider color="var(--c-color-outline-medium)" description="medium分割线"></c-divider>
  </div>
  <br />
  <div class="divider-demo-gray">
    <c-divider color="var(--c-color-outline-strong)" description="strong分割线"></c-divider>
  </div>
</template>
<style scoped>
.divider-demo-gray {
  padding: 32px;
  background: #f8f9fb;
}
</style>
