<script setup lang="ts">
import { ref } from "vue";
import type { InfiniteScrollStatus } from "@cedarjs/ui";
const first = ref<HTMLElement>();
const second = ref<HTMLElement>();
const alternate = ref(false);
const active = ref(true);
const status = ref<InfiniteScrollStatus>("idle");
const loads = ref(0);
const load = () => {
  loads.value++;
  status.value = "finished";
};
</script>
<template>
  <div>
    <c-button @click="alternate = !alternate"
      >Switch target / 切换目标</c-button
    >
    <c-button @click="active = !active">Activate / 停用与激活</c-button>
    <c-button @click="status = 'idle'">New status cycle / 新状态循环</c-button>
    <p>
      Loads / 加载次数: {{ loads }}. Old checks must not replay /
      旧检查不能重放。
    </p>
    <div ref="first" style="height: 100px; overflow: auto">
      <div style="height: 300px">Target A</div>
    </div>
    <div ref="second" style="height: 100px; overflow: auto">
      <div style="height: 300px">Target B</div>
    </div>
    <KeepAlive>
      <c-infinite-scroll
        v-if="active"
        v-model:status="status"
        :target="alternate ? second : first"
        :immediate="false"
        @load="load"
      >
        <div>Detector / 触底检测</div>
      </c-infinite-scroll>
    </KeepAlive>
  </div>
</template>
