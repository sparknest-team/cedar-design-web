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
    <h4>{{ inlineCopy.dynamicAnimation }}</h4>
    <c-statistic
      :title="inlineCopy.dynamicTarget"
      :value="100"
      :animation="enabled"
      :value-from="origin"
      :animation-duration="duration"
    />
    <c-space wrap>
      <c-button @click="enabled = !enabled">{{
        enabled ? inlineCopy.disableAnimation : inlineCopy.enableAnimation
      }}</c-button>
      <c-button @click="origin = origin === 0 ? 20 : 0">{{
        inlineCopy.changeOrigin
      }}</c-button>
      <c-button @click="duration = duration === 800 ? 1600 : 800">{{
        inlineCopy.changeDuration
      }}</c-button>
    </c-space>
    <p>
      {{ inlineCopy.from }} {{ origin }}{{ inlineCopy.duration }}
      {{ duration }}ms
    </p>
  </c-space>
</template>

<script lang="ts" setup>
import { useDemoLocale as useInlineDemoLocale } from "../../__demos__/locale";
const inlineCopy = useInlineDemoLocale("statisticAnimationInline");

import { ref } from "vue";
import { IconArrowRise as CIconArrowRise } from "@cedar-design/icons-vue";

const started = ref(false);
const enabled = ref(false);
const origin = ref(0);
const duration = ref(800);
</script>
