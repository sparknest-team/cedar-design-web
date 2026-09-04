<template>
  <div>
    <c-button status="primary"
      @click="
        () => {
          timestamp = String(Date.now());
        }
      "
      style="margin-bottom: 20px"
    >
      reload
    </c-button>
  </div>
  <c-image
    width="200"
    height="200"
    :src="`https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`"
    show-loader
  />
  <c-image
    width="200"
    height="200"
    :src="`https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`"
    style="margin-left: 67px"
  >
    <template #loader>
      <div class="loader-animate" />
    </template>
  </c-image>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const timestamp = ref("");
</script>
<style scoped>
.loader-animate {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -60deg,
    var(--color-fill-2) 25%,
    var(--color-neutral-3) 40%,
    var(--color-fill-3) 55%
  );
  background-size: 400% 100%;
  animation: loop-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1) infinite;
}

@keyframes loop-circle {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
</style>
