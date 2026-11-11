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
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="direction">
        <c-radio-group
          v-model="__demoLayout['direction']"
          aria-label="direction"
          :options="[
            { label: 'row', value: 'row' },
            { label: 'column', value: 'column' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="align">
        <c-radio-group
          v-model="__demoLayout['align']"
          aria-label="align"
          :options="[
            { label: 'flex-start', value: 'flex-start' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'center', value: 'center' },
            { label: 'baseline', value: 'baseline' },
            { label: 'stretch', value: 'stretch' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="justify">
        <c-select
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
        />
      </c-form-item>
    </c-form>
    <c-space v-bind="__demoLayout">
      <div>Space:</div>
      <c-tag v-if="false">Tag</c-tag>
      <c-button status="primary">Item1</c-button>
      <c-button status="primary">Item2</c-button>
    </c-space>
  </c-space>
</template>
