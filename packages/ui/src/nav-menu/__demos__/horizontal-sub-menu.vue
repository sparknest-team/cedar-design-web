<template>
  <div class="nav-menu-demo">
    <c-nav-menu v-model="selected" mode="horizontal" :options="options" />
    <p>当前页面：{{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { options } from "./data";

const selected = ref<string | number | null>("cloud");
</script>

<style scoped>
.nav-menu-demo {
  min-height: 180px;
}
</style>
