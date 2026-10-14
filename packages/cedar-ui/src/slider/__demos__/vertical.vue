<script setup>
import { ref } from 'vue'

const value = ref(50)
const pair = ref([7, 64])
</script>

<template>
  <section class="slider-vertical-demo">
    <c-space justify="space-around">
      <div class="slider-vertical-demo__track">
        <c-slider v-model="value" orientation="vertical" aria-label="Vertical value" />
      </div>
      <div class="slider-vertical-demo__track">
        <c-slider
          v-model="pair"
          range
          show-tooltip="always"
          orientation="vertical"
          :aria-label="['Vertical minimum', 'Vertical maximum']"
        />
      </div>
    </c-space>
    <output aria-label="Vertical values">{{ value }} / {{ pair[0] }}–{{ pair[1] }}</output>
  </section>
</template>

<style scoped>
.slider-vertical-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.slider-vertical-demo__track {
  height: 300px;
}
</style>
