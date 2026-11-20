<script setup lang="ts">

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const scrolls = ref(0);
</script>
<template>
  <div>
    <c-button @click="active = !active">Activate</c-button>
    <c-button @click="mounted = !mounted">Mount</c-button>
    <c-button @mouseenter="active = false">Hover while dragging to deactivate</c-button>
    <p>
      Scroll notifications {{ scrolls }}. Drag a thumb, release,
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
          Drag the horizontal/vertical thumb
        </div>
      </c-scrollbar>
    </KeepAlive>
  </div>
</template>
