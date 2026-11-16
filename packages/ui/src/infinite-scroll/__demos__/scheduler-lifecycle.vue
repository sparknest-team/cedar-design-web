<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale(
  "infiniteScrollSchedulerLifecycleInline",
);

import { ref } from "vue";
import type { InfiniteScrollStatus } from "@cedar-design/ui-vue";
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
    <c-button @click="alternate = !alternate">{{
      inlineCopy.switchTarget
    }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="status = 'idle'">{{
      inlineCopy.newStatusCycle
    }}</c-button>
    <p>
      {{ inlineCopy.loads }} {{ loads }}{{ inlineCopy.oldChecksMustNotReplay }}
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
        <div>{{ inlineCopy.detector }}</div>
      </c-infinite-scroll>
    </KeepAlive>
  </div>
</template>
