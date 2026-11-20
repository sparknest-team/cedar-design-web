<template>
  <c-space size="xl" align="flex-end" wrap>
    <c-statistic
      title="Growth Rate"
      :value="50.52"
      :precision="2"
      :value-from="0"
      :start="started"
      animation
    >
      <template #prefix>
        <c-icon-arrow-rise />
      </template>
      <template #suffix>%</template>
    </c-statistic>
    <c-button status="primary" @click="started = true">Start</c-button>
  </c-space>

  <c-space direction="column" style="margin-top: 16px">
    <h4>Dynamic animation</h4>
    <c-statistic
      title="Dynamic target"
      :value="100"
      :animation="enabled"
      :value-from="origin"
      :animation-duration="duration"
    />
    <c-space wrap>
      <c-button @click="enabled = !enabled">{{
        enabled ? inlineCopy.disableAnimation : inlineCopy.enableAnimation
      }}</c-button>
      <c-button @click="origin = origin === 0 ? 20 : 0">Change origin</c-button>
      <c-button @click="duration = duration === 800 ? 1600 : 800">Change duration</c-button>
    </c-space>
    <p>
      From: {{ origin }}Duration:
      {{ duration }}ms
    </p>
  </c-space>
</template>

<script lang="ts" setup>
const inlineCopy = {
  disableAnimation: "Disable animation",
  enableAnimation: "Enable animation"
};

import { ref } from "vue";
import { IconArrowRise as CIconArrowRise } from "@cedar-design/icons-vue";

const started = ref(false);
const enabled = ref(false);
const origin = ref(0);
const duration = ref(800);
</script>
