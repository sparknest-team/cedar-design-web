<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("scrollbarThumbLifecycleInline");

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const scrolls = ref(0);
</script>
<template>
  <div>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="mounted = !mounted">{{ inlineCopy.mount }}</c-button>
    <c-button @mouseenter="active = false">{{
      inlineCopy.hoverWhileDraggingToDeactivate
    }}</c-button>
    <p>
      {{ inlineCopy.scrollNotifications }} {{ scrolls }}. Drag a thumb, release,
      open context menu or blur the window; later movement must not replay.
      Fresh activation requires a fresh press.
    </p>
    <KeepAlive v-if="mounted">
      <c-scrollbar
        v-if="active"
        style="height: 160px; width: 260px; overflow: auto"
        @scroll="scrolls++"
      >
        <div style="height: 800px; width: 700px">
          {{ inlineCopy.dragTheHorizontalVerticalThumb }}
        </div>
      </c-scrollbar>
    </KeepAlive>
  </div>
</template>
