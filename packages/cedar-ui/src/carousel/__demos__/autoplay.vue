<script setup>
import { ref } from "vue";
const current = ref(0);
const playing = ref(true);
const changes = ref(0);
const sources = ["/cat.jpg", "/cat2.jpg", "/cat3.jpg"];
</script>

<template>
  <section class="carousel-autoplay-demo">
    <label><input v-model="playing" type="checkbox" /> 自动播放</label>
    <p role="status">当前页：{{ current + 1 }}；切换次数：{{ changes }}</p>
    <c-carousel
      v-model:current="current"
      height="180px"
      :auto-play="playing ? 2000 : false"
      @change="changes += 1"
    >
      <c-carousel-item v-for="(source, index) in sources" :key="source">
        <img
          class="carousel-autoplay-demo__image"
          :src="source"
          :alt="'示例图片 ' + (index + 1)"
        />
      </c-carousel-item>
    </c-carousel>
  </section>
</template>

<style scoped>
.carousel-autoplay-demo__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
