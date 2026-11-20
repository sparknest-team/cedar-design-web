<script setup lang="ts">

import { ref } from "vue";
import type { SliderValue } from "..";
const value = ref(20);
const disabled = ref(false);
const readonly = ref(false);
const max = ref(100);
const starts = ref(0);
const ends = ref<SliderValue[]>([]);
function recordEnd(next: SliderValue) {
  ends.value.push(next);
}
function keyboard(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  if (!["d", "r", "m"].includes(key)) return;
  event.preventDefault();
  if (key === "d") disabled.value = !disabled.value;
  if (key === "r") readonly.value = !readonly.value;
  if (key === "m") max.value = max.value === 100 ? 80 : 100;
}
function restore() {
  disabled.value = false;
  readonly.value = false;
  max.value = 100;
}
</script>
<template>
  <div style="width: 100%; padding: 24px 0" @keydown="keyboard">
    <p>While dragging, press D, R or M to cancel by changing the configuration.</p>
    <c-slider
      v-model="value"
      edit-mode="direct"
      :disabled="disabled"
      :readonly="readonly"
      :max="max"
      aria-label="Session end"
      @start="starts++"
      @end="recordEnd"
    />
    <p role="status">
      start: {{ starts }}；end: {{ ends.length }}Last proposal:
      {{ JSON.stringify(ends.at(-1)) ?? "—" }}
    </p>
    <p>
      value: {{ value }}；disabled: {{ disabled }}；readonly:
      {{ readonly }}；max: {{ max }}
    </p>
    <c-button @click="restore">Restore controls</c-button>
  </div>
</template>
