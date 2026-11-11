<script setup lang="ts">
import { ref } from 'vue'

const timestamp = ref('')

function reload() {
  timestamp.value = String(Date.now())
}
</script>

<template>
  <c-space direction="column" :size="16">
    <c-button status="primary" size="sm" @click="reload">重新加载</c-button>
    <c-space :size="16" wrap>
      <c-image width="160" height="160" show-loader :src="`/cat.jpg?reload=${timestamp}`" preview-disabled />
      <c-image width="160" height="160" :src="`/cat.jpg?reload=${timestamp}`" preview-disabled>
        <template #loader>
          <div class="loader-animate" />
        </template>
      </c-image>
      <c-image width="160" height="160" :src="`/cat.jpg?reload=${timestamp}`" preview-disabled>
        <template #loader>
          <img class="progressive" src="/cat2.jpg" alt="" />
        </template>
      </c-image>
    </c-space>
  </c-space>
</template>

<style scoped>
.loader-animate {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -60deg,
    var(--c-color-fill-2) 25%,
    var(--c-color-fill-3) 40%,
    var(--c-color-fill-2) 55%
  );
  background-size: 400% 100%;
  animation: loop-circle 1.5s cubic-bezier(0.34, 0.69, 0.1, 1) infinite;
}

.progressive {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
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
