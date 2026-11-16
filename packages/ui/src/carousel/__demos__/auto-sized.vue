<script setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("carouselAutoSizedInline");

import { computed, ref } from "vue";
const current = ref(1);
const changes = ref(0);
const wider = ref(false);
const compact = ref(false);
const extra = ref(false);
const empty = ref(false);
const reversed = ref(false);
const widths = computed(() => {
  const items = empty.value
    ? []
    : [140, 220, 180, 260, ...(extra.value ? [200] : [])];
  return (reversed.value ? items.reverse() : items).map(
    (width) => width + (wider.value ? 80 : 0),
  );
});
</script>

<template>
  <section class="auto-sized-demo">
    <c-checkbox v-model="wider"> {{ inlineCopy.widerCards }}</c-checkbox>
    <c-checkbox v-model="compact">
      {{ inlineCopy.text300pxViewport }}</c-checkbox
    >
    <c-checkbox v-model="extra"> {{ inlineCopy.extraCard }}</c-checkbox>
    <c-checkbox v-model="empty"> {{ inlineCopy.empty }}</c-checkbox>
    <c-checkbox v-model="reversed"> {{ inlineCopy.reverseCards }}</c-checkbox>
    <p role="status">Current: {{ current }} · Changes: {{ changes }}</p>
    <c-carousel
      v-model="current"
      slides-per-view="auto"
      :space-between="12"
      :style="{ width: compact ? '300px' : '100%' }"
      height="180px"
      centered-slides
      draggable
      @change="changes++"
    >
      <c-carousel-item
        v-for="width in widths"
        :key="width"
        :style="{ width: width + 'px' }"
      >
        <div class="carousel-demo-panel">{{ width }}px</div>
      </c-carousel-item>
    </c-carousel>
  </section>
</template>
<style scoped>
.carousel-demo-panel {
  display: grid;
  place-items: center;
  height: 100%;
  background: #e0e7ff;
  color: #312e81;
}
</style>
