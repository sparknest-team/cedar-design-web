<template>
  <div class="nav-menu-demo">
    <c-button @click="collapsed = !collapsed">{{
      collapsed ? "展开菜单" : "折叠菜单"
    }}</c-button>
    <c-nav-menu
      :options="options"
      :collapsed="collapsed"
      default-value="cloud"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { options } from "./data";

const collapsed = ref(false);
</script>

<style scoped>
.nav-menu-demo {
  display: grid;
  justify-items: start;
  gap: 12px;
  width: 240px;
  max-width: 100%;
}

.nav-menu-demo :deep(.c-nav-menu) {
  width: 100%;
}
</style>
