<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("carouselSchedulerLifecycleInline");

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const current = ref(1);
const playing = ref(false);
const moves = ref(0);
</script>
<template>
  <div>
    <c-button @click="playing = !playing">{{ inlineCopy.autoplay }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="mounted = !mounted">{{ inlineCopy.mount }}</c-button>
    <p>
      {{ inlineCopy.current }} {{ current }}{{ inlineCopy.changes }}
      {{ moves }}. Suspend during autoplay or loop settlement, then activate.
      Old work must not replay.
    </p>
    <KeepAlive v-if="mounted">
      <c-carousel
        v-if="active"
        v-model="current"
        :auto-play="playing ? { interval: 1000 } : false"
        :move-speed="600"
        :height="180"
        keyboard
        mousewheel
        @change="moves++"
      >
        <c-carousel-item v-for="item in 3" :key="item"
          >{{ inlineCopy.slide }} {{ item }}</c-carousel-item
        >
      </c-carousel>
    </KeepAlive>
  </div>
</template>
