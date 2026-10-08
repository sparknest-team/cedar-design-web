<script setup lang="ts">
import { ref } from "vue";

const fullscreen = ref(false);
</script>

<template>
  <c-watermark content="Cedar Design" :fullscreen="fullscreen" :z-index="99">
    <div class="watermark-fullscreen-demo">
      <c-button status="primary" @click="fullscreen = !fullscreen">
        {{ fullscreen ? "退出全屏水印" : "开启全屏水印" }}
      </c-button>
    </div>
  </c-watermark>
</template>

<style scoped>
.watermark-fullscreen-demo {
  min-height: 160px;
  display: grid;
  place-items: center;
}
</style>
