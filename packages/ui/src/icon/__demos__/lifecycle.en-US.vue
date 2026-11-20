<script setup lang="ts">
import { getCurrentInstance, KeepAlive, ref } from "vue";
import { IconArrowLeft, IconArrowRight } from "@cedar-design/icons-vue";


const active = ref(true),
  iconName = ref("arrow-left"),
  duration = ref(300);
const app = getCurrentInstance()?.appContext.app;
if (app && !app.component("IconArrowLeft")) {
  app.component("IconArrowLeft", IconArrowLeft);
}
if (app && !app.component("IconArrowRight")) {
  app.component("IconArrowRight", IconArrowRight);
}
function toggleName() {
  iconName.value =
    iconName.value === "arrow-left" ? "arrow-right" : "arrow-left";
}
</script>
<template>
  <c-space wrap>
    <c-button @click="toggleName">Switch name</c-button>
    <c-button @click="active = !active">Toggle active</c-button>
    <c-button @click="duration = duration ? 0 : 300"
      >Toggle duration {{ duration }}ms</c-button
    >
    <KeepAlive
      ><c-icon v-if="active" :name="iconName" :transition="duration" :size="32"
    /></KeepAlive>
  </c-space>
  <p>
    Inactive changes commit on activation without replay. Duration changes cancel the old phase; zero shows the latest name immediately.
  </p>
</template>
