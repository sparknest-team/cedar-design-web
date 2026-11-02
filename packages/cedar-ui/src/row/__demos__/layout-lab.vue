<script setup>
import { reactive as __demoReactive } from "vue";

const __demoLayout = __demoReactive({ align: "start", justify: "start" });
</script>
<template>
  <c-space direction="column" :size="16">
    <c-form layout="vertical">
      <c-form-item layout="vertical" size="sm" label="align">
        <c-radio-group
          v-model="__demoLayout['align']"
          aria-label="align"
          :options="[
            { label: 'start', value: 'start' },
            { label: 'center', value: 'center' },
            { label: 'end', value: 'end' },
            { label: 'stretch', value: 'stretch' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
      <c-form-item layout="vertical" size="sm" label="justify">
        <c-radio-group
          v-model="__demoLayout['justify']"
          aria-label="justify"
          :options="[
            { label: 'start', value: 'start' },
            { label: 'center', value: 'center' },
            { label: 'end', value: 'end' },
            { label: 'space-around', value: 'space-around' },
            { label: 'space-between', value: 'space-between' },
          ]"
          variant="button"
          size="sm"
        />
      </c-form-item>
    </c-form>
    <c-row :gutter="12" v-bind="__demoLayout"
      ><c-col v-for="i in 3" :key="i" :span="8"
        ><div class="cell">8</div></c-col
      ></c-row
    >
  </c-space>
</template>
<style scoped>
.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.cell {
  box-sizing: border-box;
  padding: 12px;
  min-width: 0;
  border-radius: 4px;
  background: var(--c-color-primary);
  color: var(--c-color-white);
  text-align: center;
  overflow-wrap: anywhere;
}
.soft {
  opacity: 0.7;
}
</style>
