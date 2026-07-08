<template>
  <div style="margin-bottom: 20px">
    <c-typography-text>折叠：</c-typography-text>
    <c-switch :checked="collapsed" @click="collapsed = !collapsed" />
  </div>
  <c-grid :cols="3" :colGap="12" :rowGap="16" class="grid-demo-grid" :collapsed="collapsed">
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item" :offset="1">item | offset - 1</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item" :span="3">item | span - 3</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item">item</c-grid-item>
    <c-grid-item class="demo-item" suffix #="{ overflow }"> suffix | overflow: {{ overflow }} </c-grid-item>
  </c-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const collapsed = ref(false)
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
