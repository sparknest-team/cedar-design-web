<script setup lang="ts">
import { onUnmounted, ref } from "vue";
const loading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

function show() {
  loading.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => {
    loading.value = false;
  }, 2000);
}
onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <c-button status="danger" @click="show">切换全屏模式</c-button>
  <c-skeleton fullscreen :loading="loading" />
</template>
