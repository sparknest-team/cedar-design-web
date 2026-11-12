<script setup lang="ts">
import { ref } from 'vue'
const immediate = ref('a')
const confirmed = ref('a')
const options = [{ value: 'a', label: 'Alpha' }, { value: 'b', label: 'Beta' }]
</script>
<template>
  <c-space direction="column">
    <p>单选即生效: {{ immediate }}</p>
    <c-select v-model="immediate" :options="options" edit-mode="click" />
    <p>确认后生效: {{ confirmed }}</p>
    <c-select v-model="confirmed" :options="options" edit-mode="click" need-confirm />
  </c-space>
</template>
