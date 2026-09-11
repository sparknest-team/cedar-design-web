<template>
  <div class="nav-menu-demo">
    <p>拖动虚线容器右下角，观察菜单项收入“更多”。</p>
    <div class="nav-menu-demo__resizable">
      <c-nav-menu :options="options" mode="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { options } from "./data";
</script>

<style scoped>
.nav-menu-demo p {
  margin-top: 0;
}

.nav-menu-demo__resizable {
  width: 520px;
  max-width: 100%;
  min-width: 240px;
  min-height: 180px;
  overflow: auto;
  resize: horizontal;
  border-right: 1px dashed var(--c-color-border-2);
  border-bottom: 1px dashed var(--c-color-border-2);
}
</style>
