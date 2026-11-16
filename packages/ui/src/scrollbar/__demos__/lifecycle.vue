<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("scrollbarLifecycleInline");

import { ref } from "vue";
import type { ScrollbarInstance } from "@cedar-design/ui-vue";
const active = ref(true);
const mounted = ref(true);
const bar = ref<ScrollbarInstance>();
let retained: ScrollbarInstance | undefined;
function remember() {
  retained = bar.value;
}
function scrollRetained() {
  retained?.scrollTo(100, 100);
}
</script>
<template>
  <div>
    <c-button @click="remember">{{ inlineCopy.rememberHandle }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="mounted = !mounted">{{ inlineCopy.mount }}</c-button>
    <c-button @click="scrollRetained">{{ inlineCopy.retainedScroll }}</c-button>
    <c-button @click="bar?.scrollTo(0, 0)">{{ inlineCopy.origin }}</c-button>
    <p>
      Remember the handle, deactivate or unmount, then call it. It must be
      inert. Activate for fresh commands; zero coordinates must work.
    </p>
    <KeepAlive v-if="mounted">
      <c-scrollbar
        v-if="active"
        ref="bar"
        style="height: 160px; width: 260px; overflow: auto"
      >
        <div style="height: 800px; width: 700px">
          {{ inlineCopy.scrollableContent }}
        </div>
      </c-scrollbar>
    </KeepAlive>
  </div>
</template>
