<script setup lang="ts">
import { ref } from 'vue'
const value = ref(['a'])
</script>
<template>
  <c-space direction="column">
    <c-cascader v-model="value" multiple clearable :empty-value="() => []" :options="[{ value: 'a', label: 'Alice' }, { value: 'b', label: 'Bob' }]" />
    <output aria-live="polite">Model: {{ value === undefined ? 'undefined' : JSON.stringify(value) }}</output>
  </c-space>
</template>
