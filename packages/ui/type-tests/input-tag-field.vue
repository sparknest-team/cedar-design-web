<script setup lang="ts">
import { ref } from 'vue'
import type { InputTagValue } from '@cedar-design/ui-vue'
import InputTag from '@cedar-design/ui-vue/input-tag'

const model = ref<InputTagValue>(null)
function reading(value: InputTagValue, text: string) {
  return `${Array.isArray(value) ? value.length : value == null ? 0 : 1}: ${text}`
}
function changed(value: InputTagValue, event?: Event) {
  void [value, event?.type]
}
function opened(value: boolean) {
  void value
}
</script>
<template>
  <InputTag v-model="model" loading-mode="line" @change="changed" @open-change="opened">
    <template #label="{ data }">{{ data.label }}</template>
    <template #read="{ value, text }">{{ reading(value, text) }}</template>
    <template #clear-icon="{ clear }"><button type="button" @click="clear">Clear</button></template>
  </InputTag>
</template>
