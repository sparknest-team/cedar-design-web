<script setup>
import { ref } from "vue";

const initialItems = [
  { label: "A", value: 70 },
  { label: "B", value: 50, color: "#722ed1" },
  { label: "C", value: 10, color: "#0fc6c2" },
];
const items = ref(initialItems);
const max = ref(100);
const tooltip = ref(true);
</script>
<template>
  <c-space direction="column" size="24px" data-demo-capacity>
    <c-space wrap>
      <c-button @click="max = max === 100 ? 200 : 100"
        >Capacity: {{ max }}</c-button
      >
      <c-button @click="items = items.length ? [] : initialItems">{{
        items.length ? "Clear data" : "Restore data"
      }}</c-button>
      <c-button @click="tooltip = !tooltip"
        >Tooltips: {{ tooltip ? "on" : "off" }}</c-button
      >
    </c-space>
    <c-progress-group
      :items="items"
      :max="max"
      :tooltip="tooltip"
      show-text
      aria-label="Capacity line"
    />
    <c-progress-group
      mode="circle"
      :items="items"
      :max="max"
      :tooltip="tooltip"
      show-text
      aria-label="Capacity circle"
    />
    <p aria-live="polite">
      Items: {{ items.length }}; capacity: {{ max }}; tooltips:
      {{ tooltip ? "on" : "off" }}
    </p>
  </c-space>
</template>
