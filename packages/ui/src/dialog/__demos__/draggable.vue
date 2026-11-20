<script setup lang="ts">
const inlineCopy = {
  disableDrag: "停用拖动",
  enableDrag: "启用拖动",
  exitFullscreen: "退出全屏",
  fullscreen: "进入全屏",
  dragEnabled: "允许拖动",
  dragStopped: "拖动已停止"
};

import { ref } from "vue";
const open = ref(false);
const draggable = ref(true);
const fullscreen = ref(false);
function keyboard(event: KeyboardEvent) {
  if (event.key.toLowerCase() === "d") {
    event.preventDefault();
    draggable.value = !draggable.value;
  } else if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    fullscreen.value = !fullscreen.value;
  }
}
</script>
<template>
  <c-button @click="open = true">打开拖动示例</c-button>
  <c-dialog
    v-model:open="open"
    :draggable="draggable"
    :fullscreen="fullscreen"
    title="拖动标题"
    @keydown="keyboard"
    @confirm="open = false"
    @cancel="open = false"
  >
    <p>拖动标题时按 D 开关拖动，按 F 开关全屏。关闭后可以重新打开。</p>
    <c-space wrap>
      <c-button @click="draggable = !draggable">{{
        draggable ? inlineCopy.disableDrag : inlineCopy.enableDrag
      }}</c-button>
      <c-button @click="fullscreen = !fullscreen">{{
        fullscreen ? inlineCopy.exitFullscreen : inlineCopy.fullscreen
      }}</c-button>
    </c-space>
    <p role="status">
      {{ draggable ? inlineCopy.dragEnabled : inlineCopy.dragStopped }}
    </p>
  </c-dialog>
</template>
