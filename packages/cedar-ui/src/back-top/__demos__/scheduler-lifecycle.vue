<script setup lang="ts">
import { ref } from "vue";
import type { BackTopInstance } from "@cedar-design/ui";
const first = ref<HTMLElement>();
const second = ref<HTMLElement>();
const active = ref(true);
const alternate = ref(false);
let retained: BackTopInstance | undefined;
const capture = (instance: BackTopInstance | null) => {
  if (instance) retained = instance;
};
const lower = () => {
  if (first.value) first.value.scrollTop = 300;
  if (second.value) second.value.scrollTop = 300;
};
</script>
<template>
  <div style="position: relative">
    <c-button @click="lower">Scroll down / 滚动到底部</c-button>
    <c-button @click="alternate = !alternate"
      >Switch target / 切换目标</c-button
    >
    <c-button @click="active = !active">Activate / 停用与激活</c-button>
    <c-button @click="retained?.scrollToTop()"
      >Retained command / 保留命令</c-button
    >
    <p>
      Start an animation, switch or deactivate before completion. Old work must
      not resume.
    </p>
    <div ref="first" style="height: 100px; overflow: auto">
      <div style="height: 500px">Target A</div>
    </div>
    <div ref="second" style="height: 100px; overflow: auto">
      <div style="height: 500px">Target B</div>
    </div>
    <KeepAlive>
      <c-back-top
        v-if="active"
        :ref="capture"
        :target-container="() => (alternate ? second : first)"
        :popup-container="false"
        :duration="1000"
        easing="linear"
      />
    </KeepAlive>
  </div>
</template>
