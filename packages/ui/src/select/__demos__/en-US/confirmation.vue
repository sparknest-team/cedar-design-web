<script setup lang="ts">
import { ref } from 'vue'
const immediate = ref('a')
const confirmed = ref('a')
const options = [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }]
</script>
<template>
  <c-space direction="column">
    <p>Choose and apply: {{ immediate }}</p>
    <c-select v-model="immediate" :options="options" edit-mode="click" />
    <p>Confirm before applying: {{ confirmed }}</p>
    <c-select v-model="confirmed" :options="options" edit-mode="click" need-confirm />
  </c-space>
</template>
