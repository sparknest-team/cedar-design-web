<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheckCircle,
  IconInfoCircle,
  IconRefresh,
  IconSearch,
} from "@cedar-design/icons-vue";
const iconName = ref("arrow-left");
const app = getCurrentInstance()?.appContext.app;
const icons = {
  IconArrowLeft,
  IconArrowRight,
  IconCheckCircle,
  IconInfoCircle,
  IconRefresh,
  IconSearch,
};
for (const [name, component] of Object.entries(icons)) {
  if (app && !app.component(name)) {
    app.component(name, component);
  }
}
function toggle() {
  iconName.value =
    iconName.value === "arrow-left" ? "arrow-right" : "arrow-left";
}
</script>
<template>
  <p>
    name 是已注册图标的名称。本例提供
    arrow-left、arrow-right、check-circle、info-circle、refresh、search；默认插槽存在时优先显示插槽内容。
  </p>
  <div class="icon-name-demo">
    <c-space wrap align="center" :size="24">
      <c-button @click="toggle">切换图标</c-button>
      <c-icon :name="iconName" :size="32" :transition="300" />
    </c-space>
  </div>
</template>
