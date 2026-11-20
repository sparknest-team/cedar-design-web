<template>
  <c-space direction="column">
    <c-count-to
      ref="counter"
      :to="100"
      :duration="1200"
      :timing-function="curve"
    />
    <c-space>
      <c-button @click="cubic = !cubic">Change curve</c-button>
      <c-button @click="replay">Replay</c-button>
    </c-space>
    <p role="status">
      Next: {{ cubic ? "ease-out cubic" : "linear" }}; current: {{ applied }}.
    </p>
    <p>Changing the curve applies on replay.</p>
  </c-space>
</template>
<script setup lang="ts">

import { computed, ref } from "vue";
import type { CountToInstance } from "@cedar-design/ui-vue";
const counter = ref<CountToInstance>();
const cubic = ref(false);
const applied = ref("linear");
const linear = (value: number) => value;
const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);
const curve = computed(() => (cubic.value ? easeOutCubic : linear));
function replay() {
  applied.value = cubic.value ? "ease-out cubic" : "linear";
  counter.value?.reset();
}
</script>
