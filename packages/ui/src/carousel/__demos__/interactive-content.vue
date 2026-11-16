<script setup>
import { useDemoLocale } from "../../__demos__/locale";
const inlineCopy = useDemoLocale("carouselInteractiveContentInline");
import { ref } from "vue";

const current = ref(1);
const changes = ref(0);
</script>

<template>
  <p>
    {{ inlineCopy.hint }}
  </p>
  <p role="status">
    {{ inlineCopy.current }}: {{ current }} · {{ inlineCopy.changes }}:
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
          >{{ inlineCopy.slide }} {{ item }}
          <c-input
            :aria-label="inlineCopy.slide + item"
            :placeholder="inlineCopy.placeholder"
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
