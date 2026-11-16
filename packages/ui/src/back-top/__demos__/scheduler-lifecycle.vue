<script setup lang="ts">
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("backTopSchedulerLifecycleInline");

import { ref } from "vue";
import type { BackTopInstance } from "@cedar-design/ui-vue";
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
    <c-button @click="lower">{{ inlineCopy.scrollDown }}</c-button>
    <c-button @click="alternate = !alternate">{{
      inlineCopy.switchTarget
    }}</c-button>
    <c-button @click="active = !active">{{ inlineCopy.activate }}</c-button>
    <c-button @click="retained?.scrollToTop()">{{
      inlineCopy.retainedCommand
    }}</c-button>
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
