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
:deep(.grid-demo-grid .demo-item),
:deep(.grid-demo-grid .demo-suffix) {
  height: 48px;
  line-height: 48px;
  color: var(--c-color-text-1);
  border: 1px solid var(--c-color-border-2);
  box-sizing: border-box;
  text-align: center;
}

:deep(.grid-demo-grid .demo-item:nth-child(2n)) {
  background-color: var(--c-color-fill-3);
}

:deep(.grid-demo-grid .demo-item:nth-child(2n + 1)) {
  background-color: var(--c-color-fill-2);
}
</style>
