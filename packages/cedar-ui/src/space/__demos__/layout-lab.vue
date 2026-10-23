<script setup>
import { reactive as __demoReactive } from "vue";

const __demoLayout = __demoReactive({
  direction: "row",
  align: "flex-start",
  justify: "flex-start",
});
</script>
<template>
  <c-space direction="column" :size="16">
    <c-space wrap>
      <label
        >direction<c-select
          v-model="__demoLayout['direction']"
          :clearable="false"
          :options="[
            { label: 'row', value: 'row' },
            { label: 'column', value: 'column' },
          ]"
          aria-label="direction"
      /></label>
      <label
        >align<c-select
          v-model="__demoLayout['align']"
          :clearable="false"
          :options="[
            { label: 'flex-start', value: 'flex-start' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'center', value: 'center' },
            { label: 'baseline', value: 'baseline' },
            { label: 'stretch', value: 'stretch' },
          ]"
          aria-label="align"
      /></label>
      <label
        >justify<c-select
          v-model="__demoLayout['justify']"
          :clearable="false"
          :options="[
            { label: 'flex-start', value: 'flex-start' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'center', value: 'center' },
            { label: 'space-around', value: 'space-around' },
            { label: 'space-between', value: 'space-between' },
            { label: 'space-evenly', value: 'space-evenly' },
          ]"
          aria-label="justify"
      /></label>
    </c-space>
    <c-space v-bind="__demoLayout">
      <div>Space:</div>
      <c-tag v-if="false">Tag</c-tag>
      <c-button status="primary">Item1</c-button>
      <c-button status="primary">Item2</c-button>
    </c-space>
  </c-space>
</template>
