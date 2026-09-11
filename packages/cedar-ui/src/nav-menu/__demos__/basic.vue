<template>
  <div class="nav-menu-demo">
    <c-nav-menu v-model="selected" :options="options" />
    <p>当前页面：{{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { options } from "./data";

const selected = ref<string | number | null>(0);
</script>

<style scoped>
.nav-menu-demo {
  width: 240px;
  max-width: 100%;
}
</style>
