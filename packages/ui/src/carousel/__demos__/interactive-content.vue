<script setup>
const inlineCopy = {
  slide: "幻灯片"
};
import { ref } from "vue";

const current = ref(1);
const changes = ref(0);
</script>

<template>
  <p>
    拖动背景切换，输入框保留原生编辑。
  </p>
  <p role="status">
    当前页: {{ current }} · 切换次数:
    {{ changes }}
  </p>
  <c-carousel
    v-model="current"
    class="carousel-interactive-demo"
    height="180px"
    draggable
    touchable
    keyboard
    @change="changes++"
  >
    <c-carousel-item v-for="item in 3" :key="item">
      <div class="carousel-demo-panel">
        <label
          >幻灯片 {{ item }}
          <c-input
            :aria-label="inlineCopy.slide + item"
            placeholder="在此输入"
        /></label>
      </div>
    </c-carousel-item>
  </c-carousel>
</template>
<style scoped>
.carousel-demo-panel {
  display: grid;
  place-items: center;
  height: 100%;
  background: #dcfce7;
  color: #14532d;
}
input {
  max-width: 150px;
}
</style>
