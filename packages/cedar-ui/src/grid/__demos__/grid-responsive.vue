<template>
  <c-grid :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }" :colGap="12" :rowGap="16" class="grid-demo-grid">
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item" :span="{ xl: 4, xxl: 6 }" suffix> suffix </c-grid-item>
  </c-grid>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.grid-demo-grid .demo-item,
.grid-demo-grid .demo-suffix {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo-grid .demo-item:nth-child(2n) {
  background-color: rgba(var(--brand-6), 0.9);
}

.grid-demo-grid .demo-item:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
</style>
