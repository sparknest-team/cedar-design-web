<script setup lang="ts">

import { ref } from "vue";
const active = ref(true);
const mounted = ref(true);
const scrolls = ref(0);
</script>
<template>
  <div>
    <c-button @click="active = !active">停用与激活</c-button>
    <c-button @click="mounted = !mounted">卸载与挂载</c-button>
    <c-button @mouseenter="active = false">拖动时移入停用</c-button>
    <p>
      滚动通知: {{ scrolls }}. Drag a thumb, release,
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
          拖动横向或纵向滑块
        </div>
      </c-scrollbar>
    </KeepAlive>
  </div>
</template>
