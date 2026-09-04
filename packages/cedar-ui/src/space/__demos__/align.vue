<template>
  <c-space direction="column" align="stretch">
    <c-space direction="column">
      <c-radio-group v-model="direction">
        <c-radio value="row">row</c-radio>
        <c-radio value="column">column</c-radio>
      </c-radio-group>
      <c-radio-group v-model="align">
        <c-radio value="flex-start">flex-start</c-radio>
        <c-radio value="flex-end">flex-end</c-radio>
        <c-radio value="center">center</c-radio>
        <c-radio value="stretch">stretch</c-radio>
        <c-radio value="baseline">baseline</c-radio>
      </c-radio-group>
    </c-space>
    <c-space :align="align" :direction="direction" style="padding: 10px; background-color: var(--color-fill-2)">
      <div>Space:</div>
      <c-button status="primary">Item2</c-button>
      <c-card title="Card"> Card content </c-card>
    </c-space>
  </c-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const direction = ref('row')
const align = ref('center')
</script>
