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
    <c-button @click="toggleName">切换名称</c-button>
    <c-button @click="active = !active">切换激活</c-button>
    <c-button @click="duration = duration ? 0 : 300"
      >切换时长 {{ duration }}ms</c-button
    >
    <KeepAlive
      ><c-icon v-if="active" :name="iconName" :transition="duration" :size="32"
    /></KeepAlive>
  </c-space>
  <p>
    停用后切换名称，激活直接显示最新图标，不重放旧动画；时长变更取消旧阶段，0立即显示最新名称。
  </p>
</template>
